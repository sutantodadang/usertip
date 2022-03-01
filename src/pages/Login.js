import { Link as RouterLink } from 'react-router-dom';
// material
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Logo from '../components/Logo';
import Page from '../components/Page';
import { LoginForm } from '../sections/authentication/login';
import AuthSocial from '../sections/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  // margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center'
  // padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login PokeApp">
      {/* <AuthLayout /> */}
      {/* Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link> */}

      {/* <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Hi, Welcome Back
        </Typography>
        <img src="/static/illustrations/illustration_login.png" alt="login" />
      </SectionStyle> */}

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Logo />
            <Typography variant="h4" gutterBottom>
              Sign in to PokeApp
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your account below.</Typography>
          </Stack>
          {/* <AuthSocial /> */}

          <LoginForm />

          <Typography sx={{ pt: 4 }} variant="subtitle2">
            Don’t have an account?&nbsp;
            <Link
              sx={{ color: blue[600] }}
              variant="subtitle2"
              component={RouterLink}
              to="register"
              underline="hover"
            >
              Sign Up
            </Link>
          </Typography>

          {/* <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 3,
              display: { sm: 'none' }
            }}
          >
            Don’t have an account?&nbsp;
            <Link variant="subtitle2" component={RouterLink} to="register" underline="hover">
              Get started
            </Link>
          </Typography> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
