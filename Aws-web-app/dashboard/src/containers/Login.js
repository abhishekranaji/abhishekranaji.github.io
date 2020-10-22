import React, { useState } from "react";
import 'firebase/auth'
import Card from '@material-ui/core/Card';
import { Button, CardContent, CardHeader, TextField, ThemeProvider } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert"
import app from '../FirebaseConfig'
import { useHistory} from 'react-router-dom'
import './SignUp.css'

export default function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    var auth = app.auth();
    const history = useHistory();
    async function handleLogin(event) {
        event.preventDefault();
        setError("")
        try {
            await auth.signInWithEmailAndPassword(email,password);
            history.push("/");
        } catch (e) {
            console.log(e.message);
            if (e.message == "The email address is already in use by another account.") { setError("email already in use.");}
        }
    }
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
            <Card style={{display: "flex", width:"fit-content"}}>
                <CardContent>
                <CardHeader color="black" title="Log In"></CardHeader>
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleLogin}>
                    <TextField id="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" style={{margin:"10px"}}></TextField>
                    <TextField id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" style={{margin:"10px"}}></TextField>
                    {error ? <Alert severity="error" style={{margin:"10px", fontSize:"10px", height:"15px"}}>{error}</Alert> : <Alert severity="error" style={{display:"none", margin:"10px"}}>Failed</Alert>}
                    <Button variant="outlined" type="submit" style={{margin:"10px"}}>Log In</Button>
                </form>
                </CardContent>
            </Card>
        </div>
    )
}