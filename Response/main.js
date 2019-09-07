const Convert = require("./response");
const json = '{\r\n  \"data\": [{\r\n    \"type\": \"articles\",\r\n    \"id\": \"1\",\r\n    \"attributes\": {\r\n      \"title\": \"JSON:API paints my bikeshed!\",\r\n      \"body\": \"The shortest article. Ever.\"\r\n    }\r\n  }],\r\n  \"included\": [\r\n    {\r\n      \"type\": \"people\",\r\n      \"id\": \"42\",\r\n      \"attributes\": {\r\n        \"name\": \"John\"\r\n      }\r\n    }\r\n  ]\r\n}';
const response = Convert.toResponse(json);
console.log(response.data);
// // https://app.quicktype.io/

// const ResponseSchema = {
//     "$schema": "http://json-schema.org/draft-04/schema#",
//     "type": "object",
//     "properties": {
//       "data": {
//         "type": "array",
//         "items": [
//           {
//             "type": "object",
//             "properties": {
//               "type": {
//                 "type": "string"
//               },
//               "id": {
//                 "type": "string"
//               },
//               "attributes": {
//                 "type": "object",
//                 "properties": {
//                   "title": {
//                     "type": "string"
//                   },
//                   "body": {
//                     "type": "string"
//                   }
//                 },
//                 "required": [
//                   "title",
//                   "body"
//                 ]
//               }
//             },
//             "required": [
//               "type",
//               "id",
//               "attributes"
//             ]
//           }
//         ]
//       },
//       "included": {
//         "type": "array",
//         "items": [
//           {
//             "type": "object",
//             "properties": {
//               "type": {
//                 "type": "string"
//               },
//               "id": {
//                 "type": "string"
//               },
//               "attributes": {
//                 "type": "object",
//                 "properties": {
//                   "name": {
//                     "type": "string"
//                   }
//                 },
//                 "required": [
//                   "name"
//                 ]
//               }
//             },
//             "required": [
//               "type",
//               "id",
//               "attributes"
//             ]
//           }
//         ]
//       }
//     },
//     "required": [
//       "data",
//       "included"
//     ]
//   }
// const response =  Object.assign({}, ResponseSchema);
// const responseObject = JSON.parse('{\r\n  \"data\": [{\r\n    \"type\": \"articles\",\r\n    \"id\": \"1\",\r\n    \"attributes\": {\r\n      \"title\": \"JSON:API paints my bikeshed!\",\r\n      \"body\": \"The shortest article. Ever.\"\r\n    }\r\n  }],\r\n  \"included\": [\r\n    {\r\n      \"type\": \"people\",\r\n      \"id\": \"42\",\r\n      \"attributes\": {\r\n        \"name\": \"John\"\r\n      }\r\n    }\r\n  ]\r\n}');
// console.log(response.properties.data.items);