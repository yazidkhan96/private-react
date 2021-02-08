import React from 'react'

function Form() {
  return (
    <div className="form-data">
      <h1>Form Registrasi</h1>
      <fieldset>
        <legend>Biodata</legend>
        <label htmlFor="nama">Nama :  </label>
        <input type="text" id="nama" name="nama" /><br />
        <label htmlFor="nim">NIM :  </label>
        <input type="text" id="nim" name="nim" /><br />
        <label htmlFor="tgllahir">Tanggal Lahir : </label>
        <input type="date" id="tgllahir" name="tgllahir" value="1990-01-01" /><br />
        <label htmlFor="alamat">Alamat : </label>
        <textarea name="alamat" id="" cols="30"></textarea><br />
        <label htmlFor="tgllahir">Jenis Kelamin : </label>
        <input type="radio" id="laki" name="laki" value="pria" />
        <label htmlFor="laki">Laki-Laki</label>
        <input type="radio" id="perempuan" name="perempuan" value="perempuan" />
        <label htmlFor="perempuan">Perempuan</label>
      </fieldset>
      <fieldset>
        <legend>User Account</legend>
        <label htmlFor="username">Username  </label>
        <input type="text" id="username" name="username" /><br />
        <label htmlFor="nim">Email  </label>
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="tgllahir">Password  </label>
        <input type="password" id="Password" name="Password" /><br />
        <label htmlFor="alamat">Ulangi Password  </label>
        <input type="password" id="Password" name="Password" /><br />
      </fieldset>
      <fieldset>
        <legend>Resolusi Tahun ini</legend>
        <input type="checkbox" id="html" name="html" value="html" />
        <label for="html"> Menguasai HTML</label><br />
        <input type="checkbox" id="css" name="css" value="css" />
        <label for="css"> Paham CSS</label><br />
        <input type="checkbox" id="css" name="css" value="php" />
        <label for="css"> Mastering PHP</label><br />
      </fieldset>
      <button>Kirim data</button>
    </div >
  )
}

export default Form
