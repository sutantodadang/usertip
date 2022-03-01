import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
// components
import Logo from '../components/Logo';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  backgroundColor: 'blue'

  // [theme.breakpoints.up('md')]: {
  //   alignItems: 'flex-start',
  //   padding: theme.spacing(7, 5, 0, 7)
  // }
}));

// ----------------------------------------------------------------------

// AuthLayout.propTypes = {
//   children: PropTypes.node
// };

export default function AuthLayout() {
  return (
    <HeaderStyle>
      <Logo />

      {/* <Typography
        variant="body2"
        sx={{
          display: { xs: 'none', sm: 'block' },
          mt: { md: -2 }
        }}
      >
        {children}
      </Typography> */}
    </HeaderStyle>
  );
}
