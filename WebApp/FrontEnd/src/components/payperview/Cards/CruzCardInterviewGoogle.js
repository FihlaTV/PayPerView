import React, { Component } from 'react';

class CruzCardInterviewGoogle extends Component {
    
    constructor(props){

        super(props)
        this.subscription = this.subscription.bind(this)

    }

    subscription = (e)=>{
        console.log("subsscription");
        if(this.props.paid){
            return
        }else{
            this.props.onSubscribe();
        }
    }

    render() { 
        
        var cName=""
        var button = ""
        if(this.props.paid){
            //cName="col-md-10 mt-2 mb-2 info-row undecipher"
            cName = "row pt-2 undecipher"
            button=""
        }else{
            //cName="col-md-10 mt-2 mb-2 info-row decipher";
            cName = "row pt-2 decipher"
           // button=<div className="row justify-content-center mb-2 mt-2"><button  className="btn btn-primary" onClick={this.subscription} style={{fontSize:'16px'}} data-toggle="tooltip" data-placement="right" title="Lets you subscribe this particular information">Subscribe</button></div>
        }

        
        
        return ( 
            <div  className="row mt-2 mb-2 justify-content-center">
            <div className="col-md-10 mt-2 mb-2 info-row" style={{color:'white'}}>
                <div className={cName}>
                
                    <div className="col-md-3">
                    <img classNameName="w-100 contain" src="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview" alt="google" />
                        
                    </div>
                    <div className="col-md-9 mt-2 mb-2">
    
                        {/* <ul className="list-inline mr-auto">
                            <li className="list-inline-item"><a className="text-xs-center" target="_blank" href="#">Overview</a></li>
                            <li className="list-inline-item"><a className="text-xs-center" href="#">No Offer</a></li>
                            <li className="list-inline-item"><a className="text-xs-center" href="#">Bad Experience</a></li>
                            <li className="list-inline-item"><a className="text-xs-center" href="#">Average Interview</a></li>
                        </ul> */}
                        
                        <h5>Position Name</h5>
                        <p>
                            Supply Chain Analyst
                        </p>
                        <h5>Interview</h5>
                        <p>
                            Internal recruiter had reached out to me directly via LinkedIn. I found all of the background material forwarded to me by the recruiter (interview tips, working at Google, etc.) extremely helpful. The conducting of the interview met the expectations set in the prep material so definitely recommend that candidates go through it thoroughly.
                        </p>
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCardInterviewGoogle;