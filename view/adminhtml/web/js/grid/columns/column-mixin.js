/**
 * Copyright © - LiquidLab Agency - All rights reserved.
 * See LICENSE.txt for license details.
 */
define(['ko'], function(ko) {
    'use strict';

    return function (Column) {
        return Column.extend({
            defaults: {
                bodyTmpl: 'liquidlab/grid/cells/multiline'
            },

            /**
             * Overrides the getLabel method to convert newlines to <br> tags
             *
             * @param {Object} record - Data to be preprocessed.
             * @returns {String}
             */
            getLabel: function (record) {
                var value = this._super(record);

                if (value) {
                    // Convert newlines to <br> tags
                    return value.replace(/\n/g, '<br>');
                }

                return value;
            }
        });
    };
});
