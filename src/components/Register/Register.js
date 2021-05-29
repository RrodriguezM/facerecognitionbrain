import React from 'react'

const Register = ({ onSignIn }) => {
    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Address</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="address" id="address" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={() => onSignIn('home')} type="submit" value="Sign in" />
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Register;
