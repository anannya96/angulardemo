import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-vendorform',
  templateUrl: './vendorform.component.html',
  styleUrls: ['./vendorform.component.scss'],
})
export class VendorformComponent implements OnInit {
  constructor(private hs: HeroService, public router: Router) {}

  data: any = {
    check: false,
  };
  fileList: any;
  base64Content: any;
  filecontent: any;
  filename:any;

  ngOnInit(): void {}
  onClick() {
    this.hs.ajax(
      'Updatebuyertable_anannya',
      'http://schemas.cordys.com/buyertable_anannya',
      {
        tuple: {
          new: {
            buyertable_anannya: {
              vendorname: this.data.name,
              vendoremail: this.data.email,
              vendorcontact: this.data.pn,
              vendorcategory: this.data.cat,
              vendoraddress: this.data.add,
              vendorgst: this.data.gst,
              vendorpan: this.data.pan,
              vendorprimaryemail: this.data.spoc,
              reqdate: new Date().toJSON().slice(0, 10),
              status: 'Pending',
              documents:this.filename,

              // <reqid>PARAMETER</reqid>
              // <vendorname>PARAMETER</vendorname>
              // <vendoremail>PARAMETER</vendoremail>
              // <vendorcontact>PARAMETER</vendorcontact>
              // <vendorcategory>PARAMETER</vendorcategory>
              // <vendoraddress>PARAMETER</vendoraddress>
              // <vendorprimaryemail>PARAMETER</vendorprimaryemail>
              // <vendorprimarycontact>PARAMETER</vendorprimarycontact>
              // <vendorgst>PARAMETER</vendorgst>
              // <vendorpan>PARAMETER</vendorpan>
              // <status>PARAMETER</status>
              // <reqdate>PARAMETER</reqdate>
            },
          },
        },
      }
    );
    this.hs.ajax(
      'VendorDetails_WebserviceOperation_new',
      'http://schemas.cordys.com/default',
      {
        SOURCE: 'Notification Custom Method',

        MESSAGE_DATA: {
          Application: {
            data: {
              message_data: {
                vendorname: this.data.name,
                vendoremail: this.data.email,
                vendorcontact: this.data.pn,
                vendorcategory: this.data.cat,
                vendoraddress: this.data.add,
                vendorgst: this.data.gst,
                vendorpan: this.data.pan,
                vendorprimaryemail: this.data.spoc,
              },
            },
          },
        },

        SUBJECT: 'Submission for vendor onboarding',
        SENDER_ADDRESS: {
          MAIL_ID: this.data.email,
        },
        RECEIVERS: {
          MAILING_LIST: {
            to: {
              address: {
                emailAddress: this.data.email,
              },
            },
          },

          AWAIT_EMAIL_DELIVERY: {},
        },
      }
    );

    this.Upload_Lms_file();

  }
  change() {
    var pann = this.data.pan;
    var patt = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (pann.match(patt)) {
      console.log('Correct PAN Number');
      // button1.enable();
      this.data.check = false;
    } else {
      console.log('Worng pan card number!!');
      // button1.disable();
      this.data.check = true;
    }
  }

  uploadfile(event:any){
    this.fileList = event.target.files;
    this.filecontent = this.fileList[0].name;
    const reader = new FileReader();
    reader.onload = (e) => {
      const temp = reader.result;
      this.base64Content = [];
      this.base64Content.push(String(temp).split(',')[1]);
      //console.log(this.base64Content[0]);
}
reader.readAsDataURL(this.fileList[0]);
  }

  Upload_Lms_file() {
    this.hs
      .ajax(
        'UploadFile ',
        'http://schemas.cordys.com/DBMetaData',
        {
          FName: this.filecontent,
          FileBase64: this.base64Content[0]
        }
      )
      .then((resp: any) => {
        console.log(this.filecontent);
        console.log(this.base64Content[0]);
        localStorage.setItem('xyz',this.filecontent)
        // return filename + filepath
      });
}
}
