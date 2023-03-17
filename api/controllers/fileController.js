import shell from 'shelljs'

export function dropFile (filePath, lastName, firstName, password) {
  var username = lastName + '_' + firstName
  const sh_droppingFile = `scp ${filePath} groupe7@13.74.242.210:/home/${username}/projet`

  shell.exec(`sh ${sh_droppingFile}`, (error, stdout, stderr) => {
    console.log("__STDOUT:", stdout)
    console.log("__STDERR", stderr)
    if (error !== null) {
      console.log(`exec error: ${error}`)
    }
  })
}
