import React from "react"
import { Link , useNavigate} from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"

import DeveloperIcon from "../assets/svg/developer1.svg"
import Spinner from "../components/Spinner"


const Index = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()
  const navigate = useNavigate()
  if (checkingStatus) return <Spinner />
  if(loggedIn)
    navigate('/home')
  return (
    <>
      <div className="container p-5 ">
        <br />
        <br />
        <div className="view grey lighten-3">
          <div className="mask">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-7">
                  <h1 className="mb-4">
                    WELCOME TO OUR
                    <br />{" "}
                    <span className="text-warning">PROGRAMMERS COMMUNITY</span>
                  </h1>
                  <p className="mb-4 pb-2 dark-grey-text">
                    The most supportive community of programmers and beginners
                    learning to code. Have questions, a big idea, something to
                    share or need help? Our community will be there for you in
                    every steps.
                  </p>
                  <Link
                    className="btn btn-warning btn-rounded btn-md ml-md-0 shadow"
                    to="/register"
                  >
                    <strong>Join Us Now</strong>
                  </Link>
                </div>

                <div className="col-md-5">
                  <img src={DeveloperIcon} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <section>
          <h3 className="font-weight-bold text-center dark-grey-text pb-2">
            Our Community
          </h3>
          <hr className="w-header my-2" />
          <p className="lead text-center text-muted pt-2 mb-5">
            Join every students and teachers in one community
          </p>

          <div className="row">
            <div className="col-md-6 col-xl-4 mb-4">
              <div className="card text-center  shadow">
                <div className="card-body bg">
                  <i className="fas fa-hands-helping fa-2x"></i>
                  <h5 className="font-weight-bold py-2">Cooperation</h5>
                  <p className="mb-4">
                    Cooperate you to overcome every problems you face in
                    programming
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 mb-4">
              <div className="card text-center shadow">
                <div className="card-body">
                  <i className="fas fa-graduation-cap fa-2x"></i>
                  <h5 className="font-weight-bold py-2">Skill Development</h5>
                  <p className="mb-4">
                    Develop your skills more and more by workshops and resources
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 mb-4">
              <div className="card text-center  shadow">
                <div className="card-body bg">
                  <i className="fas fa-hands-helping fa-2x"></i>
                  <h5 className="font-weight-bold py-2">Support</h5>
                  <p className="mb-4">
                    Support others without any hesitations in the path of
                    programming
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    </>
  )
}

export default Index
