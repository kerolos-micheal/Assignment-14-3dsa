import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { About } from './about/about';
import { Notfound } from './notfound/notfound';
import { AllArticles } from './all-articles/all-articles';
import { Light } from './light/light';
import { Portrait } from './portrait/portrait';
import { NaturalLandscapes } from './natural-landscapes/natural-landscapes';
import { Technologies } from './technologies/technologies';
import { Equipment } from './equipment/equipment';
import { MoreDetails } from './more-details/more-details';

export const routes: Routes = [
{path : "", redirectTo :"home", pathMatch:"full" },
{path : "home", component :Home },
{path : "blog", component :Blog, children : [
    {path : "" , redirectTo : "all-articles" , pathMatch:"full"},
    {path : "all-articles", component :AllArticles},
    {path : "light", component :Light},
    {path : "portrait", component :Portrait},
    {path : "natural-landscapes", component :NaturalLandscapes},
    {path : "technologies", component :Technologies},
    {path : "equipment", component :Equipment},
    {path : "**", component :Notfound}

]},
{path : "about", component :About },
{path : "more-details", component :MoreDetails },
{path : "**", component :Notfound },
];
