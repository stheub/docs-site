# Configuring Zowe certificates 

As a system administrator, review this article to learn about the key concepts of Zowe certificates and the certificate configuring procudure.

Zowe uses a certificate to encrypt data for communication across secure sockets. The certificate used is specified in the `zowe.certificates` section of the `zowe.yaml`, and can either be a `PKCS12` certificate held in a USS keystore `.p12` file, or a `JCERACKS` certificate held in a keyring.  

Zowe provides the ability to generate a certificate using the `zwe init certificate` command. Zowe can also be configured to use an existing certificate that might be provided by the security team in a z/OS customer shop.

**Note** For information about how to use certiciates to start API ML on localhost, as well as management of certificates for API Mediation Layer when installing Zowe runtime on z/OS, see [Certificate management in Zowe API Mediation Layer](../extend/extend-apiml/certificate-management-in-zowe-apiml.md).
 
## Trust store

In addition to Zowe using the intra-address space of certificates, Zowe also uses external services on z/OS (such as z/OSMF or Zowe conformant extensions that have registered themselves with the API Mediation Layer) to encrypt messages between its servers. These services present their own certificate to the API Mediation Layer, wherein the trust store is used to capture the relationship between Zowe's southbound edge and these external certificates.  

To disable the trust store validation of southbound certificates, set the value `zowe.verifyCertificates: DISABLED` in the `zowe.yaml` configuration file. A scenario when this is recommended is if the z/OSMF certificate is self-signed or uses an untrusted CA. In this case, Zowe API Mediation Layer does not recognize the signing authority.  

To enable certificate validation without hostname validation, set `zowe.verifyCertificates: NONSTRICT`. Using this setting, the certificate Common Name or Subject Alternate Name (SAN) is not checked. This facilitates deployment to environments where certificates are valid but do not contain a valid hostname. This configuration is for development purposes only and should not be used for production.

to successfully start Zowe with `zowe.verifyCertificates: STRICT`, ensure that the trust store is set up properly. 

## Keystore versus key ring

Zowe supports certificates that are stored either in a USS directory **Java KeyStore** in `.p12` format or alternatively are held in a **z/OS Keyring**. The use of a z/OS keystore is recommended for storing certificates where system programmers are already familiar with certificate operation and usage. Users who set up  keystores for certificate storage require elevated permissions. For the creation of a Zowe sandbox environment or for testing purposes when the TSO user ID does not have authority to manipulate key rings, USS keystores are a good alternative.

### PKCS12 certificates in a keystore

Zowe is able to use PKCS12 certificates that are stored in USS. A PKCS12 certificate is used for encrypting TLS communication between Zowe clients and the Zowe z/OS servers, as well as intra z/OS Zowe server to Zowe server.  Zowe uses a `keystore` directory to contain its external certificate, and a `truststore` directory to hold the public keys of servers it communicates with such as z/OSMF.  

Using USS PKCS12 certificates is useful for proof of concept projects using a self signed certificate.  For production usage of Zowe it is recomended to work with certificates held in z/OS keyrings.  Working with z/OS keyrings may require system administrator priviledges and working with your z/OS security team. To facilitate configuring and launching test and scratch Zowe instances, the self signed PKCS12 path is provided.

### JCERACFKS certificates in a key ring

Zowe is able to work with certificates held in a **z/OS Keyring**.  

The JCL member `.SZWESAMP(ZWEKRING)` contains security commands to create a keyring named `ZoweKeyring` and manage the certificate and certificate authority (CA) used by Zowe's servers to encrypt TLS communications.  The JCL contains commands for three z/OS security managers: RACF, TopSecret, and ACF/2.

There are two ways to configure and submit `ZWEKRING`.

- Customize and submit the `ZWEKRING` JCL member.
- Customize the `zowe.setup.certificate` section in `zowe.yaml` and use the `zwe init certificate` command. 

Using the `zwe init certificate` command prepares a customized JCL member using `ZWEKRING` as a template.  

A number of keyring scenarios are supported:

- Creation of a local certificate authority (CA) which is used to sign a locally generated certificate. Both the CA and the certificate are placed into the `ZoweKeyring`.
- Importing an existing certificate already held in z/OS to the `ZoweKeyring` for use by Zowe.  
- Creation of a locally generated certificate where the certificate is signed with an existing certificate authority. The certificate is placed in the key ring.


### Create a certificate authority and use it to self sign a certificate

The `zwe init security` command takes its input from the `zowe.setup.security` section in `zowe.yaml`.  To help with customizing the file there are five sections in the file.

## Extended key usage

When a TLS certificate is used for encryption across a socket connection, one of those endpoints is the client and the other is a server. This usage is restricted with the `Extended Key Usage` (EKU) attribute. Zowe can work with certificates that have no EKU. Note however that if a EKU is specified, it must have both server and client usage. 

Note that one limitation is that z/OS certificates may be configured to explicitly act only as server northbound certificates with a `TLS Web Server Authentication (1.3.6.1.5.5.7.3.1)` OID. As Zowe micro services authenticate to the API Catalog on USS using TLS, the certificate needs to be valid as a southbound client certificate. To enable this certificate to function as a valid southbound client certificate, ensure that the certificate contains the `TLS Web Client Authentication (1.3.6.1.5.5.7.3.2)` value in the Extended Key Usage section. 

Additionally, the `Digital signature and/or key agreement` must also be set as an extension value in the Key Usage section. For more information, see [key usage extensions and extended key usage](https://help.hcltechsw.com/domino/10.0.1/admin/conf_keyusageextensionsandextendedkeyusage_r.html).

## How to configure your certificate?

If you have an existing certificate, you can import it to the keystore or keyring. See instructions in [Configure certificates if you have existing certificates](./import-certificates.md).

If you do not have an existing certificate, it is necessary to create one. See instructions in [Generate a certificate if you don't have a certificate](./generate-certificates.md).

When your certificate is ready in the keystore or keyring, you can start using it. For more information, see instructions in [Use certificates](./use-certificates.md).

If you run into any error when configuring certificates, see the [Troubleshooting guide for certificate configuring](placeholder).
