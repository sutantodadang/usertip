import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { blue } from '@mui/material/colors';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
//
import USERLIST from '../_mocks_/user';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function User() {
  const [select, setSelect] = React.useState('');

  const handleSelect = (event, newValue) => {
    setSelect(newValue);
  };

  return (
    <Page title="Catch A Pokemon" other={{ bgcolor: 'whitesmoke', height: 1, pt: 2 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            mb: 5,
            borderRadius: 5,
            minHeight: '75vh',
            padding: 5,
            width: 1,
            bgcolor: 'white'
          }}
        >
          <Typography variant="h3">Catch A Pokemon</Typography>
          <Typography variant="body1">
            Its a wild west out there. Good Luck, Pokemon Trainer PlayerNAme
          </Typography>

          <Box sx={{ display: 'flex', width: 1, pt: 2 }}>
            <Box sx={{ width: '50%', mr: 2 }}>
              <Typography>Choose Your Poke Ball</Typography>

              <ToggleButtonGroup
                orientation="vertical"
                value={select}
                exclusive
                onChange={handleSelect}
                sx={{ width: 1, gap: 3, mt: 2 }}
                fullWidth
                color="info"
              >
                <ToggleButton value="poke">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      width: 1
                    }}
                  >
                    <Iconify icon="icon-park:pokeball-one" />
                    <Box sx={{ textAlign: 'left', pl: 2 }}>
                      <Typography variant="subtitle2">5 Left</Typography>
                      <Typography variant="body1">Poke Ball</Typography>
                    </Box>
                  </Box>
                </ToggleButton>
                <ToggleButton value="great">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      width: 1
                    }}
                  >
                    <Iconify icon="icon-park:pokeball-one" />
                    <Box sx={{ textAlign: 'left', pl: 2 }}>
                      <Typography variant="subtitle2">50 Left</Typography>
                      <Typography variant="body1">Great Ball</Typography>
                    </Box>
                  </Box>
                </ToggleButton>
                <ToggleButton value="master">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      width: 1
                    }}
                  >
                    <Iconify icon="icon-park:pokeball-one" />
                    <Box sx={{ textAlign: 'left', pl: 2 }}>
                      <Typography variant="subtitle2">1 Left</Typography>
                      <Typography variant="body1">Master Ball</Typography>
                    </Box>
                  </Box>
                </ToggleButton>
              </ToggleButtonGroup>

              <LoadingButton
                sx={{ bgcolor: blue[600], boxShadow: 2, mt: 4 }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                // loading={isSubmitting}
                loadingIndicator
              >
                Catch A Pokemon
              </LoadingButton>
            </Box>

            <img width={498} height={475} src="/static/illustrations/image.png" alt="login" />
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
