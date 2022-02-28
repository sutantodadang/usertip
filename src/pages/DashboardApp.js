// material
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import CardDashboard from '../sections/@dashboard/app/AppWeeklySales';

// components
import Page from '../components/Page';
import { AppNewUsers, AppItemOrders } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Home" other={{ bgcolor: 'whitesmoke', height: 1, pt: 2 }}>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome PlayerName</Typography>
        </Box>
        <Box
          sx={{
            mb: 5,
            borderRadius: 5,
            minHeight: 100,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            pr: 10,
            pl: 5,
            width: 1,
            bgcolor: 'white'
          }}
        >
          <Typography variant="h6">Start Your Adventure Now!</Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 4, height: 40 }}
          >
            Catch A Pokemon
          </Button>
        </Box>
        <Grid sx={{ bgcolor: 'white', borderRadius: 5, padding: 3 }} container spacing={3}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ bgcolor: 'purple', width: 20, height: 40, mr: 2 }} />
            <Typography>OverView</Typography>
          </Grid>
          <Grid item xs>
            <CardDashboard title="Pokemons Catched" sum={12} />
          </Grid>
          <Grid item xs>
            <AppNewUsers />
          </Grid>
          <Grid item xs>
            <AppItemOrders />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid> */}
          {/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
