
    import React from 'react'

    const Avatar = ({children, backgroundColor, px, py, padding, color, borderRadius, fontSize, textAlign, cursor
    }) => {
    
    console.log("hello Avatar jsx");
    
      const style = {
        // children, 
        backgroundColor, 
        padding: `${px} ${py}`, 
        color: color || 'black',
        borderRadius, 
        fontSize, 
        textAlign : 'center',
        cursor: cursor || null,
        textDecoration: "none"
      }
      return (
        <div style={style}>
          {children}
        </div>
        )
      
    }
    
    export default Avatar