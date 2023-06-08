import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation createTempUser(
    $email: String!
    $user_name: String!
    $password: String!
    $gender: String!
    $contact_number: String!
    $first_name: String!
    $last_name: String!
  ) {
    createTempUser(
      email: $email
      user_name: $user_name
      password: $password
      gender: $gender
      contact_number: $contact_number

      first_name: $first_name
      last_name: $last_name
    ) {
      success
      error
      temp {
        id
      }
    }
  }
`;

export const LOGIN_MUTATION = gql `
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password)
  }

`;

// export const VERIFY_MAIL = gql`
// verifyMailOtp(
// $email: String!
// $user_name: String!
// $password: String!
// $contact_number: String!
// $first_name: String!
// $last_name: String!
// $is_email_verified: Boolean
// $email_otp: Int
// $gender: String!
// ) {
//   verifyMailOtp(
// email: $email
// user_name: $user_name
// password: $password
// contact_number: $contact_number
// first_name: $first_name
// last_name: $last_name
// is_email_verified: Boolean
// email_otp: Int
// gender: $gender
// ):
// }
// `;
