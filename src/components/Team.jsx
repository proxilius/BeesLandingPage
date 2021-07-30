import { Link } from "react-router-dom"

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>A Csapat</h2>
          <p>
            A méz az életünk.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  
                    <div className='thumbnail'>
                    <Link to={`/profile/${i}/${d.name}`}>Home
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                        <p className="team-p">{d.desc}</p>
                      </div>
                      </Link>
                  </div>
                  
   
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
