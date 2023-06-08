# Import and configure an existing certificate 

Zowe makes it possible to import and configure existing certificates. The following certificates are supported by Zowe:

* PKCS12 certificates
* JCERACFKS certificates

Review the procedure to import existing PKCS12 or JCERACFKS certificates as well as how to import a certificate stored in an MVS data set into a Zowe keyring.

## Import an existing PKCS12 certificate

To import a PKCS12 certificate, it is first necessary to import a certificate authority. Then, you can configure the section `[# >>>> Certificate setup scenario 2](https://github.com/zowe/zowe-install-packaging/blob/60bc4b44ecd502fcec640fbb9e2874e9d56e826a/example-zowe.yaml#L142)` in `zowe.yaml`. 

For PKCS12 certificate users, specify the following parameters in the `zowe.yaml` file:

* Define `zowe.setup.certificate.pkcs12.import.keystore` if you acquired one or more certificates from another CA, stored them in PKCS12 format, and now want to import the certificate(s) into the Zowe PKCS12 keystore.

* Specify `zowe.setup.certificate.pkcs12.import.password`  
 This value is the password for keystore defined in `zowe.setup.certificate.pkcs12.import.keystore`.

* Specify `zowe.setup.certificate.pkcs12.import.alias`  
This value is the original certificate alias defined in `zowe.setup.certificate.pkcs12.import.keystore`.

    The imported certificate is saved under the alias specified in `zowe.setup.certificate.pkcs12.name`.

**Example YAML:**
```
zowe:
  setup:
    certificate:
      type: PKCS12
      pkcs12:
        directory: /var/zowe/keystore
        lock: true
          name: localhost     # Optional, default value is localhost.
          password: password  # Optional, default value is password.
        import:
          keystore: ""
          password: ""
          alias: ""
      importCertificateAuthorities:
        - ""
```

**Note:**  
Due to the limitation of the RACDCERT command, the `importCertificateAuthorities` field can contain a maximum of two entries.


### Manually import a certificate authority into a web browser

To import an existing certificate and avoid the browser untrusted CA challenge, import Zowe's certificates into the browser.

Trust in the API ML server is a necessary precondition for secure communication between the browser or API Client application. Ensure this trust by installing a Certificate Authority (CA) public certificate. By default, API ML creates a local CA. Import the CA public certificate to the truststore for REST API clients and to your browser. You can also import the certificate to your root certificate store.


<!-- - If a SAF keyring is being used and set up with `ZWEKRING` JCL, the procedure to obtain the certificate does not apply. It is recommended that you work with your security system administrator to obtain the certificate. Start the procedure at step 2. -->

The public certificate in [PEM format](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) is stored at `<KEYSTORE_DIRECTORY>/local_ca/localca.cer` where `<KEYSTORE_DIRECTORY>` is defined in a customized `<RUNTIME_DIR>/bin/zowe-setup-certificates.env` file during the installation step that generates Zowe certificates. The certificate is stored in UTF-8 encoding so you need to transfer it as a binary file. Since this is the certificate to be trusted by your browser, it is recommended to use a secure connection for transfer.

**Note:**  
Windows currently does not recognize the PEM format. For Windows, use the P12 version of the `local_cer`.

**Procedure:**

Import the certificate to your root certificate store and trust it.

  - **For Windows**, run the following command:

    ```
    certutil -enterprise -f -v -AddStore "Root" localca.cer
    ```

    **Note:** Ensure that you open the terminal as **administrator**. This operation installs the certificate to the Trusted Root Certification Authorities.

  - **For macOS**, run the following command:  
    
    ```
    $ sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain localca.cer
    ```

  - **For Firefox**, manually import your root certificate via the Firefox settings, or force Firefox to use the Windows truststore.
    As a default, Firefox uses its own certificate truststore.

    Create a new Javascript file firefox-windows-truststore.js at `C:\Program Files (x86)\Mozilla Firefox\defaults\pref` with the   following content:

    ```
    /* Enable experimental Windows truststore support */
    pref("security.enterprise_roots.enabled", true);
    ```

**Tip:**  
To avoid requiring each browser to trust the CA that signed the Zowe certificate, you can use a public certificate authority such as _Symantec_, _Comodo_, _Let's Encrypt_, or _GoDaddy_to create a certificate. These certificates are trusted by all browsers and most REST API clients. This option, however, requires a manual process to request a certificate and may incur a cost payable to the publicly trusted CA.

## Import an existing JCERACFKS certificate

To import a JCERACFKS certificate, you need to configure the section `[# >>>> Certificate setup scenario 4](https://github.com/zowe/zowe-install-packaging/blob/60bc4b44ecd502fcec640fbb9e2874e9d56e826a/example-zowe.yaml#L211)` in `zowe.yaml`. To use a JCERACFKS certificate, specify the following parameters in the `zowe.yaml` file.

- `zowe.setup.certificate.keyring.connect.user`  
This is a required parameter that specifies the owner of existing certificate. This field can have value of SITE or a user ID.
- `zowe.setup.certificate.keyring.connect.label`  
This is a required parameter that sets the label of an existing certificate.

**Example YAML:**
```
zowe:
  setup:
    certificate:
      type: JCERACFKS
      keyring:
        name: ZoweKeyring
        connect:
          user: IBMUSER
          label: ""
      importCertificateAuthorities:
        - ""
```

**Note:**  
Due to the limitation of the RACDCERT command, the `importCertificateAuthorities` field can contain a maximum of two entries.

## Import a certificate stored in an MVS data set into a Zowe keyring

To import a certificate that is stored in a data set into a key ring, configure the section `[# >>>> Certificate setup scenario 5](https://github.com/zowe/zowe-install-packaging/blob/60bc4b44ecd502fcec640fbb9e2874e9d56e826a/example-zowe.yaml#L235)` in `zowe.yaml`. To use a JCERACFKS certificate, specify the following parameters in the `zowe.yaml` file.

- `zowe.setup.certificate.keyring.connect.dsName`  
This is a required parameter which specifies the data set where the certificate stored.
- `zowe.setup.certificate.keyring.connect.password`  
This parameter specifies the password when importing the certificate.
-  `zowe.setup.certificate.keyring.label`  
This parameter specifies that label of the certificate that is imported. 

**Example YAML:**
```
zowe:
  setup:
    certificate:
      type: JCERACFKS
      keyring:
        name: ZoweKeyring
        label: localhost  # Optional, default value is localhost.
      import:
        dsName: ""
        password: ""
```

<!-- Any command to run? -->

## Next steps

Once your certiicate is successfully imported, review the documentation about [how to use these certificates](./use-certificates.md) in a Zowe production environement.