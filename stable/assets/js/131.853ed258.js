(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{611:function(e,t,a){"use strict";a.r(t);var o=a(18),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-gateway-features-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-gateway-features-configuration"}},[e._v("#")]),e._v(" Advanced Gateway features configuration")]),e._v(" "),a("p",[e._v("As a system programmer who wants to configure advanced Gateway features of the API Mediation Layer, you can customize Gateway parameters by modifying either of the following files:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<Zowe install directory>/components/gateway/bin/start-gateway.sh")])]),e._v(" "),a("li",[a("code",[e._v("<Zowe instance directory>/instance.env")])])]),e._v(" "),a("p",[e._v("The parameters begin with the "),a("code",[e._v("-D")]),e._v(" prefix, similar to all the other parameters in the file.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Restart Zowe to apply changes to the parameter.")]),e._v(" "),a("p",[e._v("Follow the procedures in the following sections to customize Gateway parameters according to your preferences:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#prefer-ip-address-for-api-layer-services"}},[e._v("Prefer IP Address for API Layer services")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#saf-as-an-authentication-provider"}},[e._v("SAF as an Authentication provider")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gateway-retry-policy"}},[e._v("Gateway retry policy")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gateway-client-certificate-authentication"}},[e._v("Gateway client certificate authentication")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gateway-timeouts"}},[e._v("Gateway timeouts")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cors-handling"}},[e._v("CORS handling")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#encoded-slashes"}},[e._v("Encoded slashes")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#connection-limits"}},[e._v("Connection limits")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#replace-or-remove-catalog-with-another-service"}},[e._v("Replace or remove catalog with another service")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#api-mediation-layer-as-a-standalone-component"}},[e._v("API Mediation Layer as a standalone component")])])]),e._v(" "),a("h2",{attrs:{id:"prefer-ip-address-for-api-layer-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefer-ip-address-for-api-layer-services"}},[e._v("#")]),e._v(" Prefer IP Address for API Layer services")]),e._v(" "),a("p",[e._v("API Mediation Layer services use the hostname when communicating with each other. This behavior can be changed so that the IP address is used instead.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(" configuration file.")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_PREFER_IP_ADDRESS")]),e._v(" and set the value to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Changing the value of this property might introduce problems with certificates. Ensure that the IP Address is present on the certificate SAN name.")]),e._v(" "),a("h2",{attrs:{id:"saf-as-an-authentication-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saf-as-an-authentication-provider"}},[e._v("#")]),e._v(" SAF as an Authentication provider")]),e._v(" "),a("p",[e._v("By default, the API Gateway uses z/OSMF as an authentication provider. It is possible to switch to SAF as the authentication\nprovider instead of z/OSMF. The intended usage of SAF as an authentication provider is for systems without z/OSMF.\nIf SAF is used and the z/OSMF is available on the system, the created tokens are not accepted by z/OSMF. Use\nthe following procedure to switch to SAF.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(" configuration file.")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_SECURITY_AUTH_PROVIDER")]),e._v(" and set the value to "),a("code",[e._v("saf")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart Zowe&trade.")])]),e._v(" "),a("p",[e._v("Authentication requests now utilize SAF as the authentication provider. API ML can run without z/OSMF present on the system.")]),e._v(" "),a("h2",{attrs:{id:"gateway-retry-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-retry-policy"}},[e._v("#")]),e._v(" Gateway retry policy")]),e._v(" "),a("p",[e._v("To change the Gateway retry policy, edit properties in the "),a("code",[e._v("<Zowe install directory>/components/gateway/bin/start.sh")]),e._v(" file:")]),e._v(" "),a("p",[e._v("All requests are disabled as the default configuration for retry with one exception: the server retries "),a("code",[e._v("GET")]),e._v(" requests that finish with status code "),a("code",[e._v("503")]),e._v(".\nTo change this default configuration, include the following parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("ribbon.retryableStatusCodes")])]),e._v(" "),a("p",[e._v("Provides a list of status codes, for which the server should retry the request.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")]),e._v(" "),a("code",[e._v('-Dribbon.retryableStatusCodes="503, 404"')])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.OkToRetryOnAllOperations")])]),e._v(" "),a("p",[e._v("Specifies whether to retry all operations for this service. The default value is "),a("code",[e._v("false")]),e._v(". In this case, only "),a("code",[e._v("GET")]),e._v(" requests are retried if they return a response code that is listed in "),a("code",[e._v("ribbon.retryableStatusCodes")]),e._v(". Setting this parameter to "),a("code",[e._v("true")]),e._v(" enables retry requests for all methods which return a response code listed in "),a("code",[e._v("ribbon.retryableStatusCodes")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Enabling retry can impact server resources due to request body buffering.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.MaxAutoRetries")])]),e._v(" "),a("p",[e._v("Specifies the number of times a failed request is retried on the same server. This number is multiplied with "),a("code",[e._v("ribbon.MaxAutoRetriesNextServer")]),e._v(". The default value is "),a("code",[e._v("0")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.MaxAutoRetriesNextServer")])]),e._v(" "),a("p",[e._v("Specifies the number of additional servers that attempt to make the request. This number excludes the first server. The default value is "),a("code",[e._v("5")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"gateway-client-certificate-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-client-certificate-authentication"}},[e._v("#")]),e._v(" Gateway client certificate authentication")]),e._v(" "),a("p",[a("strong",[e._v("Note:")])]),e._v(" "),a("p",[e._v("Beginning with release 1.19 LTS, it is possible to authenticate using client certificates. The feature is functional and tested, but automated testing on various security systems is not complete. As such, the feature is provided as a beta release for early preview. If you would like to offer feedback using client certificate authentication, please create an issue against the api-layer repository. Client Certificate authentication will move out of Beta once test automation is fully implemented across different security systems.")]),e._v(" "),a("p",[e._v("Use the following procedure to enable the feature to use a client certificate as the method of authentication for the API Mediation Layer Gateway.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open the "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(" configuration file.")])]),e._v(" "),a("li",[a("p",[e._v("Configure the following properties:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("APIML_SECURITY_X509_ENABLED")])]),e._v(" "),a("p",[e._v("This property is the global feature toggle. Set the value to "),a("code",[e._v("true")]),e._v(" to enable client certificate functionality.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("APIML_SECURITY_ZOSMF_APPLID")])]),e._v(" "),a("p",[e._v("When z/OSMF is used as an authentication provider, provide a valid "),a("code",[e._v("APPLID")]),e._v(" to allow for client certificate authentication. The API ML generates a passticket for the specified "),a("code",[e._v("APPLID")]),e._v(" and subsequently uses this passticket to authenticate to z/OSMF. The default value in the installation of z/OSMF is "),a("code",[e._v("IZUDFLT")]),e._v(".")])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The following steps are only required if the ZSS hostname or default Zowe user name are altered:")])]),e._v(" "),a("li",[a("p",[e._v("Open the file "),a("code",[e._v("<Zowe install directory>/components/gateway/bin/start.sh")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Configure the following properties:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("apiml.security.x509.externalMapperUrl")])]),e._v(" "),a("p",[e._v("The API Mediation Gateway uses an external API to map a certificate to the owner in SAF. This property informs the Gateway about the location of this API. ZSS is the API provider in Zowe. Provide the ZSS URL in the following format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-Dapiml.security.x509.externalMapperUrl=http://localhost:<ZSS-PORT>/certificate/x509/map\n")])])]),a("p",[e._v("The default port is "),a("code",[e._v("8542")]),e._v(". The hostname is "),a("code",[e._v("localhost")]),e._v(" as the ZSS server is accessible only locally.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiml.security.x509.externalMapperUser")])]),e._v(" "),a("p",[e._v("To authenticate to the mapping API, a JWT token is sent with the request. The token represents the user that is configured with this property. The user authorization is required to use the "),a("code",[e._v("IRR.RUSERMAP")]),e._v(" resource within the "),a("code",[e._v("FACILITY")]),e._v(" class. The default value is "),a("code",[e._v("ZWESVUSR")]),e._v(". Permissions are set up during installation with the "),a("code",[e._v("ZWESECUR")]),e._v(" JCL or workflow.")]),e._v(" "),a("p",[e._v("To customize the "),a("code",[e._v("ZWESECUR")]),e._v(" JCL or workflow ("),a("code",[e._v("// SET ZOWEUSER=ZWESVUSR * userid for Zowe started task")]),e._v("), change the "),a("code",[e._v("apiml.security.x509.externalMapperUser")]),e._v(" to a new value.")])])])]),e._v(" "),a("li",[a("p",[e._v("Restart "),a("code",[e._v("Zowe&trade")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"gateway-timeouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-timeouts"}},[e._v("#")]),e._v(" Gateway timeouts")]),e._v(" "),a("p",[e._v("Use the following procedure to change the global timeout value for the API Mediation Layer instance.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_GATEWAY_TIMEOUT_MILLIS")]),e._v(", and set the value to the desired value.")]),e._v(" "),a("li",[e._v("Restart "),a("code",[e._v("Zowe&trade")]),e._v(".")])]),e._v(" "),a("p",[e._v("If you require finer control, you can edit the "),a("code",[e._v("<Zowe install directory>/components/gateway/bin/start.sh")]),e._v(", and modify the following properties:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("apiml.gateway.timeoutMillis")])]),e._v(" "),a("p",[e._v("This property defines the global value for http/ws client timeout.")])])]),e._v(" "),a("p",[e._v("Add the following properties to the file for the API Gateway:")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Ribbon configures the client that connects to the routed services.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("ribbon.connectTimeout")])]),e._v(" "),a("p",[e._v("Specifies the value in milliseconds which corresponds to the period in which API ML should establish a single, non-managed connection with the service. If omitted, the default value specified in the API ML Gateway service configuration is used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.readTimeout")])]),e._v(" "),a("p",[e._v("Specifies the time in milliseconds of inactivity between two packets in response from this service to API ML. If omitted, the default value specified in the API ML Gateway service configuration is used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("ribbon.connectionManagerTimeout")])]),e._v(" "),a("p",[e._v("The HttpClient employs a special entity to manage access to HTTP connections called by the HTTP connection manager. The purpose of an HTTP connection manager is to serve as a factory for new HTTP connections, to manage the life cycle of persistent connections, and to synchronize access to persistent connections. Internally, the connections that are managed serve as proxies for real connections. "),a("code",[e._v("ConnectionManagerTimeout")]),e._v(" specifies a period during which managed connections with API ML should be established. The value is in milliseconds. If omitted, the default value specified in the API ML Gateway service configuration is used.")])])]),e._v(" "),a("h2",{attrs:{id:"cors-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-handling"}},[e._v("#")]),e._v(" CORS handling")]),e._v(" "),a("p",[e._v("By default, Cross-Origin Resource Sharing (CORS) is disabled in the API Gateway for the Gateway routes "),a("code",[e._v("api/v1/gateway/**")]),e._v(". To enable CORS at the service level, it is necessary to enable CORS in the Gateway. Use the following procedure to enable CORS.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_CORS_ENABLED")]),e._v(" and set the value to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart "),a("code",[e._v("Zowe&trade")]),e._v(".")])]),e._v(" "),a("p",[e._v("Requests through the Gateway now contain a CORS header.")]),e._v(" "),a("h2",{attrs:{id:"encoded-slashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoded-slashes"}},[e._v("#")]),e._v(" Encoded slashes")]),e._v(" "),a("p",[e._v("By default, the API Mediation Layer accepts encoded slashes in the URL path of the request. If you are onboarding applications which expose endpoints that expect encoded slashes, it is necessary to keep the default configuration. We recommend that you change the property to "),a("code",[e._v("false")]),e._v(" if you do not expect the applications to use the encoded slashes.")]),e._v(" "),a("p",[e._v("Use the following procedure to reject encoded slashes.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_ALLOW_ENCODED_SLASHES")]),e._v(" and set the value to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("li",[e._v("Restart "),a("code",[e._v("Zowe&trade")]),e._v(".")])]),e._v(" "),a("p",[e._v("Requests with encoded slashes are now rejected by the API Mediation Layer.")]),e._v(" "),a("h2",{attrs:{id:"connection-limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-limits"}},[e._v("#")]),e._v(" Connection limits")]),e._v(" "),a("p",[e._v("By default, the API Gateway accepts up to 100 concurrent connections per route, and 1000 total concurrent connections. Any further concurrent requests are queued until the completion of an existing request. The API Gateway is built on top of Apache HTTP components that require these two connection limits for concurrent requests. For more information, see "),a("a",{attrs:{href:"http://hc.apache.org/httpcomponents-client-ga/tutorial/html/connmgmt.html#d5e393",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Use the following procedure to change the number of concurrent connections.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_MAX_CONNECTIONS_PER_ROUTE")]),e._v(" and set the value to an appropriate positive integer.")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("APIML_MAX_TOTAL_CONNECTIONS")]),e._v(" and set the value to an appropriate positive integer.")])]),e._v(" "),a("h2",{attrs:{id:"replace-or-remove-catalog-with-another-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-or-remove-catalog-with-another-service"}},[e._v("#")]),e._v(" Replace or remove catalog with another service")]),e._v(" "),a("p",[e._v("By default, the API Mediation Layer contains API Catalog as a service showing available services. As the API Mediation Layer can be successfully run without this component it is possible to replace or remove the service from the Gateway home page and health checks. The following section describes the behavior of the Gateway home page and health checks.")]),e._v(" "),a("p",[e._v("The default option displays the API Catalog.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("APIML_GATEWAY_CATALOG_ID = apicatalog\n")])])]),a("p",[e._v("A value can also be applied to "),a("code",[e._v("API_GATEWAY_CATALOG_ID")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Examples:")])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[e._v("none")])])]),e._v(" "),a("p",[e._v("Nothing is displayed on the Gateway home page and the Catalog is removed from "),a("code",[e._v("/application/health")])])]),e._v(" "),a("li",[a("p",[a("strong",[a("code",[e._v("alternative-catalog")])])]),e._v(" "),a("p",[e._v("An alternative to the API Catalog is displayed")])]),e._v(" "),a("li",[a("p",[a("strong",[a("code",[e._v("metrics-dashboard")])])]),e._v(" "),a("p",[e._v("A possible dashboard that could appear in place of the API Catalog")])])]),e._v(" "),a("p",[a("strong",[e._v("Notes:")])]),e._v(" "),a("ul",[a("li",[e._v("If the application contains the "),a("code",[e._v("homePageUrl")]),e._v(" and "),a("code",[e._v("statusPageRelativeUrl")]),e._v(", then the full set of information is displayed.")]),e._v(" "),a("li",[e._v("If the application contains the "),a("code",[e._v("homePageUrl")]),e._v(" the link is displayed without the "),a("code",[e._v("UP")]),e._v(" information")]),e._v(" "),a("li",[e._v("If the application contains the "),a("code",[e._v("statusPageRelativeUrl")]),e._v(" then "),a("code",[e._v("UP")]),e._v(" or "),a("code",[e._v("DOWN")]),e._v(" is displayed based on the "),a("code",[e._v("statusPage")]),e._v(" without the link.")])]),e._v(" "),a("p",[e._v("Use the following procedure to change or replace the Catalog service:")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("At the end of the file with the property "),a("code",[e._v("APIML_GATEWAY_CATALOG_ID")]),e._v(" add a new line. Set the value with the following options:")]),e._v(" "),a("ul",[a("li",[e._v("Set the value to "),a("code",[e._v("none")]),e._v(" to remove the Catalog service.")]),e._v(" "),a("li",[e._v("Set the value to the ID of the service that is onboarded to the API Mediation Layer.")])])])]),e._v(" "),a("h1",{attrs:{id:"api-mediation-layer-as-a-standalone-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-mediation-layer-as-a-standalone-component"}},[e._v("#")]),e._v(" API Mediation Layer as a standalone component")]),e._v(" "),a("p",[e._v("You can start the API Mediation Layer independently of other Zowe components.\nBy default, the Gateway, Zowe System Services, and Virtual Desktop start when\nZowe runs. To limit consumed resources when the Virtual Desktop or Zowe System\nServices are not required, it is possible to specify which components start in the\ncontext of Zowe. No change is required during the installation process to\nsupport this setup.")]),e._v(" "),a("p",[e._v("Once Zowe is installed, use the following procedure to limit which components start.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Open the file "),a("code",[e._v("<Zowe instance directory>/instance.env")]),e._v(".")]),e._v(" "),a("li",[e._v("Find the property "),a("code",[e._v("ZWE_LAUNCH_COMPONENTS")]),e._v(" and set "),a("code",[e._v("discovery,gateway,api-catalog")])]),e._v(" "),a("li",[e._v("Restart "),a("code",[e._v("Zowe&trade")]),e._v(".")])]),e._v(" "),a("p",[e._v("To learn more about the related section of the environment file, see "),a("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#component-groups"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(". We recommend you open this page in a new tab.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);