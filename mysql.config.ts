const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'student'
})

connection.connect()

const query = (sql, datas) => {
  if (datas) {
    sql = formatNamedParameters(sql, datas.replacements)
  }

  return new Promise((resolve, reject) => {
    console.info(sql)
    connection.query(sql, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

function formatNamedParameters (sql, values, timeZone, dialect) {
  return sql.replace(/:+(?!\d)(\w+)/g, (value, key) => {
    if ('postgres' === dialect && '::' === value.slice(0, 2)) {
      return value
    }

    if (values[key] !== undefined) {
      return escape(values[key], timeZone, dialect, true)
    }
    throw new Error(`Named parameter "${value}" has no value in the given object.`)
  })
}

function escape (val, timeZone, dialect, format) {
  let prependN = false
  if (val === undefined || val === null) {
    return 'NULL'
  }
  switch (typeof val) {
    case 'boolean':
      if (dialect === 'sqlite' || dialect === 'mssql') {
        return +!!val
      }
      return (!!val).toString()
    case 'number':
      return val.toString()
    case 'string':
      prependN = dialect === 'mssql'
      break
  }

  if (val instanceof Date) {
    val = dataTypes[dialect].DATE.prototype.stringify(val, { timezone: timeZone })
  }

  if (Buffer.isBuffer(val)) {
    if (dataTypes[dialect].BLOB) {
      return dataTypes[dialect].BLOB.prototype.stringify(val)
    }

    return dataTypes.BLOB.prototype.stringify(val)
  }

  if (Array.isArray(val)) {
    const partialEscape = escVal => escape(escVal, timeZone, dialect, format)
    if (dialect === 'postgres' && !format) {
      return dataTypes.ARRAY.prototype.stringify(val, { escape: partialEscape })
    }
    return arrayToList(val, timeZone, dialect, format)
  }

  if (!val.replace) {
    // throw new Error(`Invalid value ${logger.inspect(val)}`)
  }

  if (dialect === 'postgres' || dialect === 'sqlite' || dialect === 'mssql') {
    val = val.replace(/'/g, "''")

    if (dialect === 'postgres') {
      val = val.replace(/\0/g, '\\0')
    }
  } else {
    val = val.replace(/[\0\n\r\b\t\\'"\x1a]/g, s => {
      switch (s) {
        case '\0': return '\\0'
        case '\n': return '\\n'
        case '\r': return '\\r'
        case '\b': return '\\b'
        case '\t': return '\\t'
        case '\x1a': return '\\Z'
        default: return `\\${s}`
      }
    })
  }
  return `${(prependN ? "N'" : "'") + val}'`
}
function arrayToList (array, timeZone, dialect, format) {
  return array.reduce((sql, val, i) => {
    if (i !== 0) {
      sql += ', '
    }
    if (Array.isArray(val)) {
      sql += `(${arrayToList(val, timeZone, dialect, format)})`
    } else {
      sql += escape(val, timeZone, dialect, format)
    }
    return sql
  }, '')
}
module.exports = {
  connection,
  query
}