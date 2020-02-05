import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/main.css'

function IndexPage () {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1 className="text-danger">Hi people</h1>
          <p>Welcome to Snu.lv, let me serve you some links tho</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12 p-2">
          <div className="border p-2">
            <h4 className="text-danger">News tho</h4>
            <ul>
              <li><a href="https://www.nrk.no">NRK</a></li>
              <li><a href="https://news.ycombinator.com">Hacker News</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 p-2">
          <div className="border p-2">
            <h4 className="text-danger">DNDBeyond yo</h4>
            <ul>
              <li><a href="https://www.dndbeyond.com/">Main</a></li>
              <li><a href="https://www.dndbeyond.com/campaigns/620013">Frozen</a></li>
              <ul>
                <li>
                  <a href="https://www.dndbeyond.com/profile/Qulvin/characters/16457360">Pip</a>
                </li>
                <li>
                  <a
                    href="https://www.dndbeyond.com/profile/derputmeister/characters/16455296">Dareth</a></li>
                <li><a
                  href="https://www.dndbeyond.com/profile/celis/characters/16443828">Dekle</a></li>
                <li><a
                  href="https://www.dndbeyond.com/profile/5andshark/characters/17313363">Levias</a></li>
                <li><a
                  href="https://www.dndbeyond.com/profile/SIFRI/characters/14190418">Ursula</a></li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 p-2">
          <div className="border p-2">
            <h4 className="text-danger">Bored bro</h4>
            <ul>
              <li><a href="https://www.reddit.com/">Roddat</a></li>
              <li><a href="https://www.youtube.com">YahTabb</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
