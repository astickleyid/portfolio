import { useState } from 'react';
import clsx from 'clsx';
import * as Tabs from '@radix-ui/react-tabs';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function ShowcaseTabs({ projects }) {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const reduceMotion = useReducedMotion();

  return (
    <Tabs.Root
      className="showcase"
      value={activeProjectId}
      onValueChange={setActiveProjectId}
      orientation="vertical"
    >
      <Tabs.List className="showcase__tablist" aria-label="Featured project navigation">
        {projects.map((project) => {
          const isActive = project.id === activeProjectId;

          return (
            <Tabs.Trigger
              key={project.id}
              value={project.id}
              className={clsx('showcase__trigger', isActive && 'is-active')}
            >
              <span className="showcase__trigger-tag">{project.category}</span>
              <strong>{project.name}</strong>
              <span>{project.trigger}</span>
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      <div className="showcase__panel-wrap">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeProject.id}
            className="showcase__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="showcase__copy">
              <div className="showcase__meta">
                <span className="eyebrow">{activeProject.category}</span>
                <span className="showcase__tagline">{activeProject.tagline}</span>
              </div>

              <h2>{activeProject.headline}</h2>
              <p className="showcase__summary">{activeProject.summary}</p>

              <div className="showcase__pill-row">
                {activeProject.stack.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="showcase__detail-grid">
                <div className="showcase__detail-card">
                  <span className="detail-label">Role</span>
                  <ul>
                    {activeProject.role.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="showcase__detail-card">
                  <span className="detail-label">Why it matters</span>
                  <p>{activeProject.whyItMatters}</p>
                </div>
              </div>

              <div className="showcase__links">
                {activeProject.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className={clsx('showcase__visual', `showcase__visual--${activeProject.tone}`)}>
              <motion.div className="showcase__visual-main" layout>
                <img src={activeProject.images.primary} alt={activeProject.images.primaryAlt} />
              </motion.div>

              <motion.div className="showcase__visual-secondary" layout>
                <img src={activeProject.images.secondary} alt={activeProject.images.secondaryAlt} />
              </motion.div>

              <motion.div className="showcase__visual-phone" layout>
                <img src={activeProject.images.phone} alt={activeProject.images.phoneAlt} />
              </motion.div>

              <div className="showcase__artifact-rail">
                {activeProject.artifacts.map((artifact) => (
                  <div key={artifact.label} className="artifact-card">
                    <span className="detail-label">{artifact.label}</span>
                    <p>{artifact.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </Tabs.Root>
  );
}
