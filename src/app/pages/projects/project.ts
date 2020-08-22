import { Section } from './section';
import { ProjectLink } from './project-link';
import { GalleryImage } from './gallery-image';

export class Project {
    id: string;
    title: string;
    description: string;
    date: string;
    cardPhotoUrl: string;
    sections: Section[];
    tech: string[];
    projectLinks: ProjectLink[]
    titlePhotoUrl?: string;
    titleVideoUrl?: string;
    galleryImages?: GalleryImage[];
}