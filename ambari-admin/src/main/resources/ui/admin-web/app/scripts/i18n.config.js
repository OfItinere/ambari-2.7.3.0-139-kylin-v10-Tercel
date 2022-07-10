/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('ambariAdminConsole')
.config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en',{
    'CLUSTER.ADMINISTRATOR': 'Operator',
    'CLUSTER.USER': 'Read-Only',
    'VIEW.USER': 'Use',

    'common.ambari': 'Ambari',
    'common.apacheAmbari': 'Apache Ambari',
    'common.about': 'About',
    'common.version': 'Version',
    'common.signOut': 'Sign out',
    'common.register': 'Register',
    'common.clusters': 'Clusters',
    'common.views': 'Views',
    'common.roles': 'Roles',
    'common.users': 'Users',
    'common.groups': 'Groups',
    'common.versions': 'Versions',
    'common.stack': 'Stack',
    'common.details': 'Details',
    'common.dashboard': 'Dashboard',
    'common.goToDashboard': 'Go to Dashboard',
    'common.exportBlueprint': 'Export Blueprint',
    'common.download': 'Download',
    'common.noClusters': 'No Clusters',
    'common.noViews': 'No Views',
    'common.view': 'View',
    'common.displayLabel': 'Display label',
    'common.search': 'Search',
    'common.name': 'Name',
    'common.any': 'Any',
    'common.none': 'None',
    'common.type': 'Type',
    'common.add': 'Add {{term}}',
    'common.delete': 'Delete {{term}}',
    'common.deregisterCluster': 'Deregister Cluster',
    'common.cannotDelete': 'Cannot Delete {{term}}',
    'common.privileges': 'Privileges',
    'common.cluster': 'Cluster',
    'common.remoteClusters': 'Remote Clusters',
    'common.services': 'Services',
    'common.clusterRole': 'Cluster Role',
    'common.viewPermissions': 'View Permissions',
    'common.getInvolved': 'Get involved!',
    'common.license': 'Licensed under the Apache License, Version 2.0',
    'common.tableFilterMessage': '{{showed}} of {{total}} {{term}} showing',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.renameCluster': 'Rename Cluster',
    'common.renameClusterTip': 'Only alpha-numeric characters, up to 80 characters',
    'common.clusterCreationInProgress': 'Cluster creation in progress...',
    'common.all': 'All',
    'common.group': 'Group',
    'common.user': 'User',
    'common.settings': 'Settings',
    'common.authentication': 'Authentication',
    'common.deleteConfirmation': 'Are you sure you want to delete {{instanceType}} {{instanceName}}?',
    'common.remoteClusterDelConfirmation': 'Are you sure you want to delete {{instanceType}} {{instanceName}}? This operation cannot be undone.',
    'common.messageInstanceAffected': 'The following View Instances are using this Remote Cluster for configuration, and will need to be reconfigured:',
    'common.local': 'Local',
    'common.remote': 'Remote',
    'common.pam': 'PAM',
    'common.ldap': 'LDAP',
    'common.jwt': 'JWT',
    'common.warning': 'Warning',
    'common.filterInfo': '{{showed}} of {{total}} {{term}} showing',
    'common.usersGroups': 'Users/Groups',
    'common.enabled': 'Enabled',
    'common.disabled': 'Disabled',
    'common.NA': 'n/a',
    'common.blockViewLabel': 'BLOCK',
    'common.listViewLabel': 'LIST',
    'common.rbac': 'Role Based Access Control',
    'common.important': 'Important',
    'common.undo': 'Undo',
    'common.fromGroupMark': '(from group)',
    'common.copy': '_Copy',
    'common.clusterInformation': 'Cluster Information',
    'common.clusterManagement': 'Cluster Management',
    'common.userManagement': 'User Management',
    'common.admin': 'Admin',
    'common.actions': 'Actions',
    'common.error': 'Error',
    'common.select': 'Select',

    'common.clusterNameChangeConfirmation.title': 'Confirm Cluster Name Change',
    'common.clusterNameChangeConfirmation.message': 'Are you sure you want to change the cluster name to {{clusterName}}?',

    'common.loginActivities.loginActivities': 'Login Activities',
    'common.loginActivities.loginMessage': 'Login Message',
    'common.loginActivities.loginMessage.placeholder': 'Please enter login message',
    'common.loginActivities.homeDirectory': 'Home Directory',
    'common.loginActivities.notEmpty': 'These field cannot be empty',
    'common.loginActivities.saveError': 'Save error',
    'common.loginActivities.message': 'Message',

    'common.loginActivities.buttonText': 'Button',
    'common.loginActivities.buttonText.placeholder': 'Please enter button text',

    'common.loginActivities.status': 'Status',
    'common.loginActivities.status.disabled': 'Disabled',

    'common.loginActivities.homeDirectory.alert': 'Many Ambari Views store user preferences in the logged in user\'s / user directory in HDFS. Optionally, Ambari can auto-create these directories for users on login.',
    'common.loginActivities.homeDirectory.autoCreate': 'Auto-Create HDFS user directories',
    'common.loginActivities.homeDirectory.header': 'User Directory Creation Options',
    'common.loginActivities.homeDirectory.template': 'User Directory creation template',
    'common.loginActivities.homeDirectory.group': 'Default Group',
    'common.loginActivities.homeDirectory.permissions': 'Permissions',

    'common.controls.cancel': 'Cancel',
    'common.controls.close': 'Close',
    'common.controls.ok': 'OK',
    'common.controls.save': 'Save',
    'common.controls.clearFilters': 'clear filters',
    'common.controls.confirmChange': 'Confirm Change',
    'common.controls.discard': 'Discard',
    'common.controls.remove': 'Remove',
    'common.controls.update': 'Update',
    'common.controls.checkAll': 'Check All',
    'common.controls.clearAll': 'Clear All',
    'common.controls.add': 'Add',

    'common.alerts.fieldRequired': 'Field required!',
    'common.alerts.fieldIsRequired': 'This field is required.',
    'common.alerts.noSpecialChars': 'Must not contain special characters!',
    'common.alerts.nothingToDisplay': 'No {{term}} to display.',
    'common.alerts.noRemoteClusterDisplay': 'No Remote Clusters to display.',
    'common.alerts.noPrivileges': 'No {{term}} privileges',
    'common.alerts.noPrivilegesDescription': 'This {{term}} does not have any privileges.',
    'common.alerts.timeOut': 'You will be automatically logged out in <b>{{time}}</b> seconds due to inactivity.',
    'common.alerts.isInvalid': '{{term}} Invalid.',
    'common.alerts.cannotSavePermissions': 'Cannot save permissions',
    'common.alerts.cannotLoadPrivileges': 'Cannot load privileges',
    'common.alerts.cannotLoadClusterStatus': 'Cannot load cluster status',
    'common.alerts.clusterRenamed': 'The cluster has been renamed to {{clusterName}}.',
    'common.alerts.remoteClusterRegistered': 'The cluster has been registered as {{clusterName}}.',
    'common.alerts.cannotRenameCluster': 'Cannot rename cluster to {{clusterName}}',
    'common.alerts.minimumTwoChars': 'Minimum length is 2 characters.',
    'common.alerts.maxTwentyFiveChars': 'Maximum length is 25 characters.',
    'common.alerts.onlyText': 'Only lowercase alphanumeric characters are allowed.',
    'common.alerts.onlyAnScore': 'Invalid input, only alphanumerics allowed eg: My_default_view',
    'common.alerts.passwordRequired': 'Password Required',
    'common.alerts.unsavedChanges': 'You have unsaved changes. Save changes or discard?',
    'common.alerts.cannotUpdateStatus': 'Cannot update User status',
    'common.alerts.cannotUpdateAdminStatus': 'Cannot update User Admin status',
    'common.alerts.checkFailed': 'CHECK FAILED',
    'common.alerts.onlySimpleChars': 'Must contain only simple characters.',
    'common.hidden' : 'Hidden',

    'main.title': 'Welcome to Apache Ambari',
    'main.noClusterDescription': 'Provision a cluster, manage who can access the cluster, and customize views for Ambari users.',
    'main.autoLogOut': 'Automatic Logout',

    'main.createCluster.title': 'Create a Cluster',
    'main.createCluster.description': 'Use the Install Wizard to select services and configure your cluster',
    'main.createCluster.launchInstallWizard': 'Launch Install Wizard',

    'main.controls.remainLoggedIn': 'Remain Logged In',
    'main.controls.logOut': 'Log Out Now',

    'views.instance': 'Instance',
    'views.viewInstance': 'View Instance',
    'views.create': 'Create Instance',
    'views.clone': 'Clone Instance',
    'views.edit': 'Edit',
    'views.viewName': 'View Name',
    'views.instances': 'Instances',
    'views.instanceName': 'Instance Name',
    'views.instanceId': 'Instance ID',
    'views.displayName': 'Display Name',
    'views.settings': 'Settings',
    'views.advanced': 'Advanced',
    'views.visible': 'Visible',
    'views.description': 'Description',
    'views.shortUrl': 'Short URL',
    'views.urlName': 'URL Name',
    'views.instanceDescription': 'Instance Description',
    'views.clusterConfiguration': 'Cluster Configuration',
    'views.localCluster': 'Local Cluster',
    'views.remoteCluster': 'Remote Cluster',
    'views.registerRemoteCluster': 'Register Remote Cluster',
    'views.clusterName': 'Cluster Name',
    'views.custom': 'Custom',
    'views.icon': 'Icon',
    'views.icon64': 'Icon64',
    'views.permissions': 'Permissions',
    'views.permission': 'Permission',
    'views.grantUsers': 'Grant permission to these users',
    'views.grantGroups': 'Grant permission to these groups',
    'views.configuration': 'Configuration',
    'views.goToInstance': 'Go to instance',
    'views.pending': 'Pending...',
    'views.deploying': 'Deploying...',
    'views.properties': 'properties',
    'views.urlDelete': 'Delete URL',

    'views.clusterPermissions.label': 'Local Cluster Permissions',
    'views.clusterPermissions.clusteradministrator': 'Cluster Administrator',
    'views.clusterPermissions.clusteroperator': 'Cluster Operator',
    'views.clusterPermissions.clusteruser': 'Cluster User',
    'views.clusterPermissions.serviceadministrator': 'Service Administrator',
    'views.clusterPermissions.serviceoperator': 'Service Operator',
    'views.clusterPermissions.infoMessage': 'Grant <strong>Use</strong> permission for the following <strong>{{cluster}}</strong> Roles:',
    'views.clusterPermissions.nonLocalClusterMessage': 'The ability to inherit view <strong>Use</strong> permission based on Cluster Roles is only available when using a Local Cluster configuration.',

    'views.alerts.noSpecialChars': 'Must not contain any special characters.',
    'views.alerts.noSpecialCharsOrSpaces': 'Must not contain any special characters or spaces.',
    'views.alerts.instanceExists': 'Instance with this name already exists.',
    'views.alerts.notDefined': 'There are no {{term}} defined for this view.',
    'views.alerts.cannotEditInstance': 'Cannot Edit Static Instances',
    'views.alerts.cannotDeleteStaticInstance': 'Cannot Delete Static Instances',
    'views.alerts.deployError': 'Error deploying. Check Ambari Server log.',
    'views.alerts.cannotUseOption': 'This view cannot use this option',
    'views.alerts.unableToResetErrorMessage': 'Unable to reset error message for prop: {{key}}',
    'views.alerts.instanceCreated': 'Created View Instance {{instanceName}}',
    'views.alerts.unableToParseError': 'Unable to parse error message: {{message}}',
    'views.alerts.cannotCreateInstance': 'Cannot create instance',
    'views.alerts.cannotLoadInstanceInfo': 'Cannot load instance info',
    'views.alerts.cannotLoadPermissions': 'Cannot load permissions',
    'views.alerts.cannotSaveSettings': 'Cannot save settings',
    'views.alerts.cannotSaveProperties': 'Cannot save properties',
    'views.alerts.cannotDeleteInstance': 'Cannot delete instance',
    'views.alerts.cannotLoadViews': 'Cannot load views',
    'views.alerts.cannotLoadViewUrls': 'Cannot load view URLs',
    'views.alerts.cannotLoadViewUrl': 'Cannot load view URL',
    'views.alerts.savedRemoteClusterInformation': 'Remote cluster information is saved.',
    'views.alerts.credentialsUpdated': 'Credentials Updated.',

    'views.table.viewType': 'View Type',
    'views.emptyTable': 'No Views to display',
    'views.createInstance.selectView': 'Select View',
    'views.createInstance.selectVersion': 'Select Version',
    'views.createInstance.clusterType': 'Cluster Type',

    'urls.url': 'URL',
    'urls.viewUrls': 'View URLs',
    'urls.createNewUrl': 'Create New URL',
    'urls.create': 'Create',
    'urls.edit': 'Edit',
    'urls.view': 'View',
    'urls.viewInstance': 'Instance',
    'urls.step1': 'Create URL',
    'urls.step2': 'Select instance',
    'urls.step3': 'Assign URL',
    'urls.noViewInstances': 'No view instances',
    'urls.none': 'None',
    'urls.change': 'Change',
    'urls.urlCreated': 'Created short URL <a href="{{siteRoot}}#/main/view/{{viewName}}/{{shortUrl}}">{{urlName}}</a>',
    'urls.urlUpdated': 'Updated short URL <a href="{{siteRoot}}#/main/view/{{viewName}}/{{shortUrl}}">{{urlName}}</a>',

    'clusters.switchToList': 'Switch&nbsp;to&nbsp;list&nbsp;view',
    'clusters.switchToBlock': 'Switch&nbsp;to&nbsp;block&nbsp;view',
    'clusters.role': 'Role',
    'clusters.assignRoles': 'Assign roles to these {{term}}',

    'clusters.alerts.cannotLoadClusterData': 'Cannot load cluster data',
    'clusters.devBlueprint': 'Cluster Blueprint',

    'groups.createLocal': 'Add Groups',
    'groups.name': 'Group name',
    'groups.role': 'Group Access',
    'groups.addUsers': 'Add users to this group',
    'groups.members': 'Members',
    'groups.membersPlural': '{{n}} member{{n == 1 ? "" : "s"}}',

    'groups.alerts.groupCreated': 'Created group <a href="#/groups/{{groupName}}/edit">{{groupName}}</a>',
    'groups.alerts.groupCreationError': 'Group creation error',
    'groups.alerts.cannotUpdateGroupMembers': 'Cannot update group members',
    'groups.alerts.getGroupsListError': 'Get groups list error',

    'users.username': 'Username',
    'users.user.name': 'User name',
    'users.admin': 'Admin',
    'users.ambariAdmin': 'Ambari Admin',
    'users.ambariClusterURL': 'Ambari Cluster URL',
    'users.changePassword': 'Change Password',
    'users.updateCredentials': 'Update Credentials',
    'users.changePasswordFor': 'Change Password for {{userName}}',
    'users.yourPassword': 'Your Password',
    'users.newPassword': 'New User Password',
    'users.newPasswordConfirmation': 'New User Password Confirmation',
    'users.create': 'Add Users',
    'users.active': 'Active',
    'users.inactive': 'Inactive',
    'users.status': 'Status',
    'users.password': 'Password',
    'users.role': 'User Access',
    'users.confirmPassword': 'Confirm Password',
    'users.passwordConfirmation': 'Password сonfirmation',
    'users.isAmbariAdmin': 'Is this user an Ambari Admin?',
    'users.isActive': 'User Status',
    'users.userIsAdmin': 'This user is an Ambari Admin and has all privileges.',
    'users.showAll': 'Show all users',
    'users.showAdmin': 'Show only admin users',
    'users.groupMembership': 'Group Membership',
    'users.userNameTip': 'Maximum length is 80 characters. \\, &, |, <, >, ` are not allowed.',
    'users.adminTip': 'An Ambari Admin can create new clusters and other Ambari Admin Users.',
    'users.deactivateTip': 'Active Users can log in to Ambari. Inactive Users cannot.',

    'users.changeStatusConfirmation.title': 'Change Status',
    'users.changeStatusConfirmation.message': 'Are you sure you want to change status for user "{{userName}}" to {{status}}?',

    'users.changePrivilegeConfirmation.title': 'Change Admin Privilege',
    'users.changePrivilegeConfirmation.message': 'Are you sure you want to {{action}} Admin privilege to user "{{userName}}"?',
    'users.changePrivilegeConfirmation.revoke': 'revoke',
    'users.changePrivilegeConfirmation.grant': 'grant',

    'users.roles.clusterUser': 'Cluster User',
    'users.roles.clusterAdministrator': 'Cluster Administrator',
    'users.roles.clusterOperator': 'Cluster Operator',
    'users.roles.serviceAdministrator': 'Service Administrator',
    'users.roles.serviceOperator': 'Service Operator',
    'users.roles.ambariAdmin': 'Ambari Administrator',
    'users.roles.viewUser': 'View User',
    'users.roles.none': 'None',
    'users.roles.oneRolePerUserOrGroup': 'Only 1 role allowed per user or group',
    'users.roles.permissionLevel': '{{level}}-level Permissions',

    'users.alerts.passwordRequired': 'Password required',
    'users.alerts.wrongPassword': 'Password must match!',
    'users.alerts.usernameRequired': 'Username Required',
    'users.alerts.cannotChange': 'Cannot Change {{term}}',
    'users.alerts.userCreated': 'Created user <a href="#/users/{{encUserName}}/edit">{{userName}}</a>',
    'users.alerts.userCreationError': 'User creation error',
    'users.alerts.removeUserError': 'Removing from group error',
    'users.alerts.cannotAddUser': 'Cannot add user to group',
    'users.alerts.passwordChanged': 'Password changed.',
    'users.alerts.cannotChangePassword': 'Cannot change password',
    'users.alerts.roleChanged': '{{name}} changed to {{role}}',
    'users.alerts.roleChangedToNone': '{{user_name}}\'s explicit privilege has been changed to \'NONE\'. Any privilege now seen for this user comes through its Group(s).',
    'users.alerts.usersEffectivePrivilege': '{{user_name}}\'s effective privilege through its Group(s) is higher than your selected privilege.',

    'versions.current': 'Current',
    'versions.addVersion': 'Add Version',
    'versions.defaultVersion': '(Default Version Definition)',
    'versions.inUse': 'In Use',
    'versions.installed': 'Installed',
    'versions.usePublic': 'Use Public Repository',

    'versions.networkIssues.networkLost': 'Why is this disabled?',
    'versions.networkIssues.publicDisabledHeader': 'Public Repository Option Disabled',
    'versions.networkIssues.publicRepoDisabledMsg': 'Ambari does not have access to the Internet and cannot use the Public Repository for installing the software. Your Options:',
    'versions.networkIssues.publicRepoDisabledMsg1': 'Configure your hosts for access to the Internet.',
    'versions.networkIssues.publicRepoDisabledMsg2': 'If you are using an Internet Proxy, refer to the Ambari Documentation on how to configure Ambari to use the Internet Proxy.',
    'versions.networkIssues.publicRepoDisabledMsg3': 'Use the Local Repositoy option.',

    'versions.selectVersion': 'Select Version',
    'versions.selectVersionEmpty': 'No other repositories',
    'versions.useLocal': 'Use Local Repository',
    'versions.uploadFile': 'Upload Version Definition File',
    'versions.enterURL': 'Version Definition File URL',
    'versions.URLPlaceholder': 'Enter URL to Version Definition File',
    'versions.defaultURL': 'https://',
    'versions.readInfo': 'Read Version Info',
    'versions.browse': 'Browse',
    'versions.installOn': 'Install on...',

    'versions.register.title': 'Register Version',
    'versions.register.error.header': 'Unable to Register',
    'versions.register.error.body': 'You are attempting to register a version with a Base URL that is already in use with an existing registered version. You *must* review your Base URLs and confirm they are unique for the version you are trying to register.',

    'versions.deregister': 'Deregister Version',
    'versions.deregisterConfirmation': 'Are you sure you want to deregister version <strong>{{versionName}}</strong> ?',
    'versions.placeholder': 'Version Number {{pattern}}',
    'versions.repos': 'Repositories',
    'versions.os': 'OS',
    'versions.baseURL': 'Base URL',
    'versions.skipValidation': 'Skip Repository Base URL validation (Advanced)',
    'versions.noVersions': 'Select version to display details.',
    'versions.patch': 'Patch',
    'versions.introduction': 'To register a new version in Ambari, provide a Version Definition File, confirm the software repository information and save the version.',
    'versions.repoID': 'Repo ID',
    'versions.repoName': 'Repo Name',

    'versions.contents.title': 'Contents',
    'versions.contents.empty': 'No contents to display',

    'versions.details.stackName': 'Stack Name',
    'versions.details.displayName': 'Display Name',
    'versions.details.version': 'Version',
    'versions.details.actualVersion': 'Actual Version',
    'versions.details.releaseNotes': 'Release Notes',

    'versions.repository.placeholder': 'Enter Base URL or remove this OS',
    'versions.repository.add': 'Add Repository',

    'versions.useRedhatSatellite.title': 'Use RedHat Satellite/Spacewalk',
    'versions.useRedhatSatellite.warning': "In order for Ambari to install packages from the right repositories, " +
    "it is recommended that you edit the names of the repo's for each operating system so they match the channel " +
    "names in your RedHat Satellite/Spacewalk instance.",
    'versions.useRedhatSatellite.disabledMsg': 'Use of RedHat Satellite/Spacewalk is not available when using Public Repositories',

    'versions.changeBaseURLConfirmation.title': 'Confirm Base URL Change',
    'versions.changeBaseURLConfirmation.message': 'You are about to change repository Base URLs that are already in use. Please confirm that you intend to make this change and that the new Base URLs point to the same exact Stack version and build',

    'versions.alerts.baseURLs': 'Provide Base URLs for the Operating Systems you are configuring.',
    'versions.alerts.validationFailed': 'Some of the repositories failed validation. Make changes to the base url or skip validation if you are sure that urls are correct',
    'versions.alerts.skipValidationWarning': 'Warning: This is for advanced users only. Use this option if you want to skip validation for Repository Base URLs.',
    'versions.alerts.useRedhatSatelliteWarning': 'Disable distributed repositories and use RedHat Satellite/Spacewalk channels instead',
    'versions.alerts.filterListError': 'Fetch stack version filter list error',
    'versions.alerts.versionCreated': 'Created version <a href="#/stackVersions/{{stackName}}/{{versionName}}/edit">{{stackName}}-{{versionName}}</a>',
    'versions.alerts.versionCreationError': 'Version creation error',
    'versions.alerts.allOsAdded': 'All Operating Systems have been added',
    'versions.alerts.osListError': 'getSupportedOSList error',
    'versions.alerts.readVersionInfoError': 'Version Definition read error',
    'versions.alerts.versionEdited': 'Edited version <a href="#/stackVersions/{{stackName}}/{{versionName}}/edit">{{displayName}}</a>',
    'versions.alerts.versionUpdateError': 'Version update error',
    'versions.alerts.versionDeleteError': 'Version delete error',
    'versions.alerts.repositoryExists': 'A repository with the same Repo ID already exists for {{os}}!',
    'versions.alerts.cannotDeleteInstalled': 'Cannot delete version already installed.',

    'authentication.description': 'Ambari supports authenticating against local Ambari users created and stored in the Ambari Database, or authenticating against a LDAP server:',
    'authentication.ldap': 'LDAP Authentication',
    'authentication.on': 'On',
    'authentication.off': 'Off',

    'authentication.connectivity.title': 'LDAP Connectivity Configuration',
    'authentication.connectivity.host': 'LDAP Server Host',
    'authentication.connectivity.port': 'LDAP Server Port',
    'authentication.connectivity.ssl': 'Use SSL?',

    'authentication.connectivity.trustStore.label': 'Trust Store',

    'authentication.connectivity.trustStorePath': 'Trust Store Path',

    'authentication.connectivity.trustStoreType.label': 'Trust Store Type',

    'authentication.connectivity.trustStorePassword': 'Trust Store Password',
    'authentication.connectivity.dn': 'Bind DN',
    'authentication.connectivity.bindPassword': 'Bind Password',

    'authentication.connectivity.controls.testConnection': 'Test Connection',

    'authentication.attributes.title': 'LDAP Attribute Configuration',

    'authentication.attributes.detection.label': 'Identifying the proper attributes to be used when authenticating and looking up users and groups can be specified manually, or automatically detected. Please choose:',

    'authentication.attributes.detection.options.manual': 'Define Attributes Manually',
    'authentication.attributes.detection.options.auto': 'Auto-Detect Attributes',

    'authentication.attributes.userSearch': 'User Search Base',
    'authentication.attributes.groupSearch': 'Group Search Base',
    'authentication.attributes.detected': 'The following attributes were detected, please review and Test Attributes to ensure their accuracy.',
    'authentication.attributes.userObjClass': 'User Object Class',
    'authentication.attributes.userNameAttr': 'User Name Attribute',
    'authentication.attributes.groupObjClass': 'Group Object Class',
    'authentication.attributes.groupNameAttr': 'Group Name Attribute',
    'authentication.attributes.groupMemberAttr': 'Group Member Attribute',
    'authentication.attributes.distinguishedNameAttr': 'Distinguished Name Attribute',

    'authentication.attributes.test.description': 'To quickly test the chosen attributes click the button below. During this process you can specify a test user name and password and Ambari will attempt to authenticate and retrieve group membership information',
    'authentication.attributes.test.username': 'Test Username',
    'authentication.attributes.test.password': 'Test Password',

    'authentication.attributes.groupsList': 'List of Groups',

    'authentication.attributes.controls.autoDetect': 'Perform Auto-Detection',
    'authentication.attributes.controls.testAttrs': 'Test Attributes',

    'authentication.attributes.alerts.successfulAuth': 'Successful Authentication',

    'authentication.controls.test': 'Test',

    'exportBlueprint.dataLoaded': 'Data loaded...',

    'remoteClusters.ambariClusterName': 'Ambari Cluster Name',
    'remoteClusters.clusterURLPlaceholder': 'http://ambari.server:8080/api/v1/clusters/c1',

    'remoteClusters.alerts.fetchError': 'Error in fetching remote clusters.'
  });

  $translateProvider.preferredLanguage('en');
}]);