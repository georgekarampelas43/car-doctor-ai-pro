export type Lang="el"|"en"|"de"|"fr"|"it"|"es";
export type DiagnosisRequest={language:Lang;make:string;model:string;year:string;engine:string;fuel:string;mileage:string;dtc:string;symptom:string};
export type DtcInfo={code:string;title:string;system:string;severity:"low"|"medium"|"high";description:string;commonCauses:string[];firstChecks:string[]};
export type DiagnosisResponse={source:"database"|"ai"|"hybrid";dtcInfo:DtcInfo|null;summary:string;likelyCauses:string[];checks:string[];measurements:string[];repairPath:string[];warnings:string[];confidence:"low"|"medium"|"high";savedToDatabase?:boolean};
