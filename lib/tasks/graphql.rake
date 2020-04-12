task dump_graphql_schema: :environment do
  schema_definition = GraphqlTypescriptExampleSchema.to_definition
  schema_path = Rails.root.join("app", "graphql", "schema.graphql")
  File.write(schema_path, schema_definition)
  puts "Updated #{schema_path}"
end
