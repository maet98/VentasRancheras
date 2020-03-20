var qb =require("node-quickbooks");
var config = require("config").get('quickbooks');
var token = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..mQAWRsaEDsTx0yUUPnSSdw.safJVmD0TeMTdtA0_9RYYz4ah0hdlWILbEAjt3kH15-74Ag5mCDnOHOejE92O1ay47eVKaLzaqon9NJkE26KtT2KTF16uvT39wSpY9Q6ZJnC9eD_NzQju0dvr96bYm7V7h_BVzy5zcVp7rKqqk1khcAuoQ96RPMTZlh88y1c30Gu5J4s4WkXFROB8r2D73seOCD6dg_PjEdj1uqrF_CJIAcZ7NeDhaDS1jq05c6KPEPeyt8Ps6QkaRxYc5qSqx7PVkAcpIT3aypntJawRPCYWslKFhctqQV0xU36_Hhc3a4RMUZ4L5_op6r4O7USrFno4WcSyV2kIhOGpL5YXbW3Ygfi4QfPDDl4D_5SnRRoEGdxGUpBT3NN9mov392eaPXeFxrJCuprqtTzrlkf3yzK78wUPorwk0-TGKeqyA5rDFOn-2ajsWTYn8t-WonJIaNsZaoyz9qO8ySc0F_HQaSnOlOV864VA6rJ-ylWQ4HBR2qt7sDdVv4lQZfw03w33Y9Oj1L62qFWKoMuwEpJs_QOfzMETHcs7ZjLwnr3ZqSz8ayUXKMGyv3zwxgr3nKHeJ8dm4qOK9vntC8fqiC5ck4iRXOCp4iyJojGxv4veXq-xhUf9cUrndD80wGdL4Sft7svyqssiMDXGijAOtrH__HC1as1o784iAEmDLWnOLovVTI390-5lnaOCELxCqoKW0hwLzJdipamcg7qk53kHXFugLkTuUxlOPTV3g0U3TIthRuw0rXLq_pJU9_jWjBBBSUiGrK3qJdXL4fF9BEI28DI_LDQr7dPCfgOjSaOr6gg69EI23ZEuIW4xG5VgP-1AfVRFSUT79sIZO_sg-OFrA9Weg.GUPCN2Q8-Fcn9PjHIjXeRQ";
var refresh = "AB11592770018qZ3zOlv1QfoSEQPVTTcPOlEBfYhFVTqquNgLY";
var qbo = new qb(
    config.get("clientId"),
    config.get("clientSecret"),
    token,
    false, // no token secret for oAuth 2.0
    config.get("realmId"),
    true, // use the sandbox?
    true, // enable debugging?
    null, // set minorversion, or null for the latest version
    '2.0',
    refresh); 

module.exports = qbo;