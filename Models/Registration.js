const db=require('../dbconnection');  
    const Regschema=db.Schema({  
        Dateofmarriage:{type:Date,required:true},
        Name:{type:String,required:true},  
        Nationality:{type:String,required:true},
        ResidentialStatus:{type:Number,required:true},
        Religion:{type:Number,required:true},
        Caste:{type:String,required:true},
        Dateofbirth:{type:Date,required:true},
        Employername:{type:String,required:true},
        Designation:{type:String,required:true},
        MaritalStatusBeforeMarriage:{type:Number,required:true},
        Mobileno:{type:Number,required:true},
        whatsappnumber:{type:Number,required:true},
        Email:{type:String,required:true},
        ResiAddress:{
            Street:{type:String,required:true},
            village:{type:String,required:true},
            Taluk:{type:String,required:true},
            District:{type:String,required:true},
            State:{type:String,required:true},
            Country:{type:String,required:true},
            Pincode:{type:String,required:true},
        },
        Passportno:{type:String,required:true},
        Fathername:{type:String,required:true},
        Fatherreligion:{type:String},
        FLivingStatus:{type:Number},
        FatherAge:{type:Number},
        FatherOccupation:{type:String},
        Fatheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        MotherName:{type:String,required:true},
        Motherreligion:{type:String},
        MLivingStatus:{type:Number},
        MotherAge:{type:Number},
        MotherOccupation:{type:String},
        Motheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        BrideName:{type:String,required:true},  
        BrideNationality:{type:String,required:true},
        BrideResidentialStatus:{type:Number,required:true},
        BrideReligion:{type:Number,required:true},
        BrideCaste:{type:String,required:true},
        BrideDateofbirth:{type:Date,required:true},
        BrideEmployername:{type:String,required:true},
        BrideDesignation:{type:String,required:true},
        BrideMaritalStatusBeforeMarriage:{type:Number,required:true},
        BrideMobileno:{type:Number,required:true},
        Bridewhatsappnumber:{type:Number,required:true},
        BrideEmail:{type:String,required:true},
        BrideResiAddress:{
            Street:{type:String,required:true},
            village:{type:String,required:true},
            Taluk:{type:String,required:true},
            District:{type:String,required:true},
            State:{type:String,required:true},
            Country:{type:String,required:true},
            Pincode:{type:String,required:true},
        },
        BridePassportno:{type:String,required:true},
        BrideFathername:{type:String,required:true},
        BrideFatherreligion:{type:String},
        BrideFLivingStatus:{type:Number},
        BrideFatherAge:{type:Number},
        BrideFatherOccupation:{type:String},
        BrideFatheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        BrideMotherName:{type:String,required:true},
        BrideMotherreligion:{type:String},
        BrideMLivingStatus:{type:Number},
        BrideMotherAge:{type:Number},
        BrideMotherOccupation:{type:String},
        BrideMotheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },

        placeofmarriage:
        {   
            Name:{type:String,required:true},
            Street:{type:String,required:true},
            village:{type:String,required:true},
            Taluk:{type:String,required:true},
            District:{type:String,required:true},
            State:{type:String,required:true},
            Country:{type:String,required:true},
            Pincode:{type:String,required:true},
        },  
        MarriageDate:{type:Date,required:true},
       // MarriageNotes:{type:String,required:true},
        whosolemnizedmarriage:{type:Number,required:true},
        Addressofsolemnized:
        {
            Street:{type:String,required:true},
            village:{type:String,required:true},
            Taluk:{type:String,required:true},
            District:{type:String,required:true},
            State:{type:String,required:true},
            Country:{type:String,required:true},
            Pincode:{type:String,required:true},
        },
       Bridemother:{type:Number,required:true},
       BrideFather:{type:Number,required:true}, 
       BrideFatherGroom:{type:Number,required:true},
       BridemotherGroom:{type:Number,required:true},
      

    //   Witness:{type:Number,required:true},
      Witnessname:{type:String,required:true},
      Witnessrelation:{type:Number,required:true},
      Witnessaddress:{
      Street:{type:String,required:true},
      village:{type:String,required:true},
      Taluk:{type:String,required:true},
      District:{type:String,required:true},
      State:{type:String,required:true},
      Country:{type:String,required:true},
      Pincode:{type:String,required:true},
    },
    Identitynumber:{type:String,required:true},

       Passport:{type:String,required:true},  
       Marksheet:{type:String,required:true},
       RationCard:{type:String,required:true},
       Aadharcard:{type:String,required:true},
      Voterid:{type:String,required:true},
      DrivingLicence:{type:String,required:true},
      PassportSizePhotograph:{type:String,required:true},
      DivorceCopy:{type:String},
      FirstMarriageCertificate:{type:String},
      SpouseDeathCertificate:{type:String},
      SingleStatusCertificate:{type:String},

      BridePassport:{type:String,required:true},  
      BrideMarksheet:{type:String,required:true},
      BrideRationCard:{type:String,required:true},
      BrideAadharcard:{type:String,required:true},
      BrideVoterid:{type:String,required:true},
      BrideDrivingLicence:{type:String,required:true},
      BridePassportSizePhotograph:{type:String,required:true},
      BrideDivorceCopy:{type:String},
      BrideFirstMarriageCertificate:{type:String},
      BrideSpouseDeathCertificate:{type:String},
      BrideSingleStatusCertificate:{type:String},

      Invitation:{type:String,required:true},  
      MarriageReceipt:{type:String,required:true},
      Moreattach:{type:String,required:true},
      Declaration:{type:Number,required:true},
      Otherservices:{type:Number,required:true},
      Subservices:{type:Number,required:true}    
});  
  
module.exports=db.model('Weddingform',Regschema);