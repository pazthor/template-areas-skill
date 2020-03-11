import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhysicalArea from './components/Areas/Physical/PhysicalArea';
import SocialEmotionalArea from './components/Areas/SocialEmotional/SocialEmotionalArea';


const urls = [
  
  {
    path: '/physical',
    component: PhysicalArea
  },
  {
    path: '/social-emocional',
    component: SocialEmotionalArea
  }
];
const Routes = () => (
  <Switch>
    {urls.map((route, i) => (
      <Route key={i.toString()} exact path={route.path} component={route.component} />
    ))}
    <Route path="*">
      <PhysicalArea />
    </Route>
  </Switch>
);

export default Routes;
