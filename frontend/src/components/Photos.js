import React from 'react'
export class Photos extends React.Component{

    render(){
        const {photos, message} = this.props
        return (<>
             {message && (<div>{message} </div>)}
             <div className="card">
                { photos && photos.map(({id,title, thumbnailUrl})=>(
                    <div className="photo" key={id}>           
                        <div style={{backgroundImage:`url(${thumbnailUrl})`, height: '150px',width:'150px',left:'50%', borderRadius:'50%'}}>  
                    </div>
                    <div>{title}</div>

                </div>
                ))}
             </div>
            </>
        )
}
}