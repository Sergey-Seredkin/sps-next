import React, {Component} from "react"
import fetch from "isomorphic-unfetch"
import Image from 'next/image'

export default class extends Component {

    static async getInitialProps() {
        const res = await fetch("https://random.dog/woof.json?filter = mp4,webm")
        const data = await res.json()

        return {
            imageURL: data.url
        }
    }
   
    
     render () {
        // const imageLoader = ({ src, width, quality }) => {
        //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`}
        return (
            <div className="homepage-wrapper">
                <h3>Random Dog Image</h3> 
                    {/* loader={imageLoader}
                    src="me.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    layout ="responsive"  */}
                    <img src ={this.props.imageURL} 
                    // width={900}
                    //height={550} 
                    //layout ="responsive"
                    />
            </div>
        )
    }
}
