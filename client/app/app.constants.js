'use strict';

import angular from 'angular';

export default angular.module('cardpokemonApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
