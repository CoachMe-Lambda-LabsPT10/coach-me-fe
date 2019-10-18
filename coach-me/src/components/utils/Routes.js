import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Redirect } from 'react-router-dom';
import HealthMetric from '../clients/healthMetrics/HealthMetric';
import CoachDashboard from '../coach/coachDashboard/CoachDashboard';
import ClientDashboard from '../clients/clientDashboard/ClientDashboard';
import ClientInfo from '../coach/coachDashboard/clientsList/ClientInfo';
import ClientsList from '../coach/coachDashboard/clientsList/ClientsList';
import ChooseLanguage from '../clients/chooseLanguage/ChooseLanguage';
import TestTranslator from '../clients/chooseLanguage/TestTranslator';
import HealthMetricForm from '../clients/healthMetricForm/HealthMetricForm';
import LoginClient from '../clients/loginClient/LoginClient'

const Routes = (props) => {
    console.log(props)
    return (
        <div>
            <Route path="/login" render={(props) => <LoginClient {...props} />} />
            <Route path='/metrics' component={HealthMetric} />
            <Route path='/dashboard' component={CoachDashboard} />
            <Route path='/dashboard-client' component={ClientDashboard} />
            <Route path='/client/:clientid' component={ClientInfo} />
            <Route path='/clients' component={ClientsList} />
            <Route path='/language/:clientid' component={ChooseLanguage} />
            <Route path='/translator' component={TestTranslator} />
            <Route path='/metric-form' component={HealthMetricForm} />
        </div>
    );
};

// const mapStatetoProps = state => {
//     console.log('App.js', state)
//     return {
//         clientinfo : state.clientinfio
//     }
// }

export default Routes;
