import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user";
import {type_place} from "./type_place";
import {catalog} from "./catalog";
import {event} from "./event";
import {galery} from "./galery";
import {member} from "./member";
import {place_filter} from "./place_filter";
import {playlist} from "./playlist";
import {reservation} from "./reservation";
import {session_spotify} from "./session_spotify";


@Entity("place",{schema:"public"})
export class place {

   
    @ManyToOne(type=>user, user=>user.places,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_representative'})
    fk_representative:user | null;


    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"date_register"
        })
    date_register:Date;
        

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"latitude"
        })
    latitude:number | null;
        

   
    @ManyToOne(type=>type_place, type_place=>type_place.places,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_type'})
    fk_type:type_place | null;


    @Column("character varying",{ 
        nullable:true,
        length:60,
        name:"color"
        })
    color:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"photo"
        })
    photo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:60,
        name:"name"
        })
    name:string;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"longitude"
        })
    longitude:number | null;
        

   
    @OneToMany(type=>catalog, catalog=>catalog.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    catalogs:catalog[];
    

   
    @OneToMany(type=>event, event=>event.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    events:event[];
    

   
    @OneToMany(type=>galery, galery=>galery.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    galerys:galery[];
    

   
    @OneToMany(type=>member, member=>member.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    members:member[];
    

   
    @OneToMany(type=>place_filter, place_filter=>place_filter.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    place_filters:place_filter[];
    

   
    @OneToMany(type=>playlist, playlist=>playlist.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    playlists:playlist[];
    

   
    @OneToMany(type=>reservation, reservation=>reservation.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    reservations:reservation[];
    

   
    @OneToMany(type=>session_spotify, session_spotify=>session_spotify.fk_place,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    session_spotifys:session_spotify[];
    
}
