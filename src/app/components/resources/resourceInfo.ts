import { ResourcesData } from './resourcesdata';

export class ResourceInfo 
{
  public resourceDate: string;
  public userid: string;
  public resourcesData: ResourcesData[];

  constructor(resourceDate: string, userid: string, resourcesData: ResourcesData[]) {
    this.resourceDate = resourceDate;
    this.userid = userid;
    this.resourcesData = resourcesData;
  }
}