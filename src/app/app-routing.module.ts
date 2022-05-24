import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { VerifyGuard } from './guards/verify.guard';
import { LivestreamComponent } from './livestream/livestream.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectedVideoComponent } from './selected-video/selected-video.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: 'full'
      },
 
    {
         path: 'home', 
         component: SidebarComponent,
         children:[
        {
            path:"",
            component:VideoContentComponent,
            children:[{
                path:"selected-video/:videoid",
                component:SelectedVideoComponent
            }
        ]}    
    ]
     },
     {
        path: 'studio-upload',
        canActivate: [VerifyGuard],
        component: StudioUploadComponent,
        
        children: [
            { path: '', component: VideoUploadComponent },
            { path: 'video-upload', component: VideoUploadComponent },
            { path: 'live-stream', component: LivestreamComponent }
        ]
    },
    {
        path: 'authenticate', component:AuthenticateComponent,
         children:[
             {path:'',component:LoginComponent},
             {path:'login',component:LoginComponent},
             {path:'register',component:RegisterComponent}
         ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

