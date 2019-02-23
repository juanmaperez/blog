import React from 'react'
import { Link } from 'gatsby'
import styled from'styled-components';

const HeaderView = styled.div`
  .header {
    position: absolute;
    z-index: 10;
    top: 0px;
    left: 0px;
    width: 50%;
    padding: 20px 0px 0px;
    box-sizing: border-box;
    
    .sub-header{
      position: relative;

      .title {
        font-size: 24px;
        font-weight: 200;
        text-transform: uppercase;
        text-decoration:none;
        font-family: 'MFred' !important;
        
        .link {
          width: 130px;
          display: block;
          color:#fff;
          transform: rotate(-90deg);
          position: relative;
          top: 50px;
          left: -35px;
          text-align: center; 
          &.open {
            font-family: 'MFred';
            
          }
          &.open {color:#141414}
        }
      }
    }
  }
`

const Header = ({ siteTitle, status }) => (
  <HeaderView>
    <div className="header">
      <div
        className="sub-header"> 
        <span className="title">
          <Link className={"link " + status} to="/">
            {siteTitle}
          </Link>
        </span>
      </div>
    </div>
  </HeaderView>
)

export default Header
