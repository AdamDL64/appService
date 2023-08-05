import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



//function 
import { login } from '../../components/functions/auth';

import { useNavigate } from 'react-router-dom';

//ใช้ redux
import { useDispatch } from 'react-redux';
import { login  as loginRedux} from '../../store/userSlice'; //เนื้องจากมีชื่อซำกันจึ้งต้องสร้างชื่อใหม as
function Copyright(props) {
  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {


  const navi = useNavigate()

  const dispatch =useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const infodata ={
      name:data.get("name"),
      password:data.get("password") ,
      role:"admin"
    }
    // loginของส้งข้อมูลไปหลังบ้าน
    login(infodata)
    .then((res)=>{
      console.log(res)
      // alert(res.data)
    alert('เข้าสู้ระบบ')
    
      //ใช้ dispatchส่งข้อมูล
      dispatch(loginRedux({
        name:res.data.payload.user.name,
        role:res.data.payload.user.role,
        token:res.data.token,
      })
      );
        //เอาไวเก็บtokenไมไห้หายตอนรีface
        localStorage.setItem('token',res.data.token)
        
        roleRedirects(res.data.payload.user.role)

    
    })
    .catch((err)=>{
      console.log(err)
    // alert("รหัสไมถูกต้อง")
    Swal.fire(
      'รหัสไม่ถูกต้อง',
      "กรุณนาตรวจสอบรหัสผ่านอีกครัง!",
      'error'
    )
   
    })
  };
 

  //fuctions ในการlogin
  const roleRedirects =(role)=>{
      // console.log(role)
      if(role === "admin"){
       navi('/next')
        
      }else{
         navi('/next')
      }
  }


  return (

    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }}

        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: "#f7fff7" }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1>MyBlogStory</h1>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              LogIn
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                // label="Email Address"
                label="Name"

                name="name"

                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            <Link to={'/register/'}>
                <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Register User
              </Button>
           </Link>
              <Link to={'/registeradmin/'}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Register Admin
              </Button>
              </Link>
              
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}