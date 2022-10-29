import React from 'react'

import profile from '../image/profile.jpeg'
function About() {
  return (
    <div className="container-about">
    <div>
      <div className="title-heading">Sinh Viên Thực Hiện</div>

      <img
        className="image-about"
        src={profile}
      />
    </div>

    <div className="container-desc__wrapper">
      <div className="container-desc">
        <p className="context">Họ và tên: Võ Tấn Bảo</p>
        <p className="context">MSSV: 46.01.104.009</p>
        <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
<p className="context">Lớp: 2211COMP1031</p>

      </div>
    </div>
  </div>
  )
}

export default About
