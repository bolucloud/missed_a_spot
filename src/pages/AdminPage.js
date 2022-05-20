import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

function AdminPage() {
  return <div>AdminPage</div>;
}

export default withAuthenticator(AdminPage);
