import { createRouter } from '@expo/ex-navigation';

import Onboarding from './screens/Onboarding/Onboarding';

export default createRouter(() => ({
  onboarding: () => Onboarding,
}));
