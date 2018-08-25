'use strict';

const _ = require('lodash');
const path = require('path');
const boot = require('@sequeless/boot');

/*
 * Register default implementation for `-/ext/controller` into the dependency injection framework
 *
 * However, `overrides` via the `args` paramater takes precedence
 */
module.exports = function mvp(args) {
	const config = _.defaultsDeep({}, args, {
		overrides: {
			'*': {
				'-/ext/controller': path.join(__dirname, './lib/ext/controller')
			}
		}
	});

	return boot(config);
};
