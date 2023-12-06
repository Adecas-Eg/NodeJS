// eslint-disable-next-line semi
const fs = require('node:fs/promises');
const path = require('node:path')

const p = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.errorp(p.red(` No se pudo leer el directorio ${folder} `))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${p.blue(fileType)} ${p.red(file.padEnd(20))} ${p.cyan(
      fileSize.padStart(10)
    )} ${p.magenta(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
