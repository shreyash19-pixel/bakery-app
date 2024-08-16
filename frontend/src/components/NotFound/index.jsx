import React from 'react'
import { NavToHome, NavToHomeWrap, NotFoundStatusCode, NotFoundTextWrap, NotFoundWrap, StatusCode } from '../../styles/NotFound'
import {Link} from 'react-router-dom'
import { BackgroundFilter } from '../../styles/Hero'

const NotFound = () => {
  return (
    <NotFoundWrap>
        <BackgroundFilter></BackgroundFilter>
        <NavToHomeWrap>
            <NavToHome>
                <NotFoundStatusCode>
                    <StatusCode>404</StatusCode>
                </NotFoundStatusCode>
                <NotFoundTextWrap>
                    <p>Page Not Found</p>
                    <Link to={"/homePage"}><button>Back to Home Page</button></Link> 
                </NotFoundTextWrap>
            </NavToHome>
        </NavToHomeWrap>
    </NotFoundWrap>
  )
}

export default NotFound