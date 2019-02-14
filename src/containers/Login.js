import React from 'react'

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    routeTo = url => {
        this.props.history.push(url)
      };
    
      login = e => {
        e.preventDefault();
        console.log(e)
        fetch(`http://localhost:3000/api/v1/auth` , {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: e.target.emailInput.value,
            password: e.target.passwordInput.value
          })
        })
          .then(res => res.json())
          .then(res => {
              console.log(res, res.token)
            this.props.setUser(res.token, res)
            this.props.history.push(`/users/${res.id}`)
        
            })
      }
    
    
      render() {
        return (
          <div>
            
            <form onSubmit={e => this.login(e)}>
              <div className="form-group">
                <label className="control-label">Email</label>
                <input
                  name="emailInput"
                  placeholder="Enter email"
                  className="form-control"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label className="control-label">Password</label>
                <input
                  name="passwordInput"
                  placeholder="Enter password"
                  className="form-control"
                  type="password"
                />
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        );
      }
    
      
}



export default Login