"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReactCompareImage from "react-compare-image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Project } from "@/data/projects";

type Variant = "sidebyside" | "slider" | "hover";

export default function ProjectDetail({ project, variant }: { project: Project; variant: Variant }) {
  const maxSlides = Math.max(project.vorher.length, project.nachher.length);
  const slides = Array.from({ length: maxSlides }, (_, i) => ({
    vorher: project.vorher[i] || project.vorher[0],
    nachher: project.nachher[i] || project.nachher[0],
  }));

  return (
    <div className="project-detail" id={project.id}>
      <div className="project-detail__header">
        <h2 className="project-detail__title">{project.title}</h2>
        <h3 className="project-detail__subtitle">{project.subtitle}</h3>
      </div>

      <div className="project-detail__main">
        <div className="project-detail__slider-area">
          {variant === "sidebyside" && (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              className="project-swiper"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="compare-slide">
                    <div className="compare-side">
                      <span className="compare-label">VORHER</span>
                      <img src={s.vorher} alt={`Vorher ${i + 1}`} />
                    </div>
                    <div className="compare-side">
                      <span className="compare-label compare-label--after">NACHHER</span>
                      <img src={s.nachher} alt={`Nachher ${i + 1}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {variant === "slider" && (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              allowTouchMove={false}
              loop={true}
              className="project-swiper"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="compare-slider-wrap">
                    <ReactCompareImage
                      leftImage={s.vorher}
                      rightImage={s.nachher}
                      leftImageLabel="VORHER"
                      rightImageLabel="NACHHER"
                      sliderLineWidth={3}
                      sliderLineColor="#fff"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {variant === "hover" && (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              className="project-swiper"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="compare-hover">
                    <img src={s.nachher} alt={`Nachher ${i + 1}`} className="compare-hover__nachher" />
                    <img src={s.vorher} alt={`Vorher ${i + 1}`} className="compare-hover__vorher" />
                    <span className="compare-label compare-label--after">NACHHER</span>
                    <span className="compare-hover__hint">Hover für Vorher</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="project-detail__info">
          <p className="project-detail__desc">{project.description}</p>
          <div className="project-detail__renovations">
            <h4>Durchgeführte Maßnahmen:</h4>
            <ul>
              {project.renovations.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}