import React, { useEffect } from 'react';

class User extends React.Component{
    constructor(props){
        super(props)

        // this.state = {
        //     count:0,
        //     count2: 1
        // }

        this.state = {
            userInfo:{
                name:"user_name",
                location:"user_location"
            }
        }

    }
    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/Yug1020")
        const json = await data.json();
        console.log(json)
        
        this.setState({
            userInfo: json
        })
    }
    
    render(){         
        // console.log("Render child class")
        const { name, location, avatar_url, bio} =  this.state.userInfo
        return(
            <div>
                <img className='w-35' src={avatar_url}></img>
                <h1 className=' text-2xl'>Name: {name}</h1>
                <p className='text-base'>Bio: {bio}</p>
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count + 2 
                    })
                }}></button> */}
                {/* <p>count: {this.state.count}</p>
                <p>count2: {this.state.count2}</p> */}
                <h2>Location: {location}</h2>
                <h2>insta: @i_a_m_yug</h2>
            </div>
        );
    };
};

export default User;