import type { Schema, Struct } from '@strapi/strapi';

export interface KeyObjectiveKeyObjective extends Struct.ComponentSchema {
  collectionName: 'components_key_objective_key_objectives';
  info: {
    displayName: 'Key Objective';
  };
  attributes: {
    description: Schema.Attribute.Text;
    objective: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ValueCoreValue extends Struct.ComponentSchema {
  collectionName: 'components_value_core_values';
  info: {
    displayName: 'Core Value';
  };
  attributes: {
    description: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'key-objective.key-objective': KeyObjectiveKeyObjective;
      'value.core-value': ValueCoreValue;
    }
  }
}
