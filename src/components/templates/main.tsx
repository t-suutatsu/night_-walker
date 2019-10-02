import React from 'react'
import Header from "../organisms/Header"
import Typography from "../atoms/Typography";
import Footer from '../organisms/Footer';

const Main: React.FC = (props) => {
  
  return (
    <div>
      <Header>
        <Typography type="title" >
          猫カフェ検索サイト
        </Typography>
      </Header>
      {props.children}
      <Footer />
    </div>
  )
}

export default Main