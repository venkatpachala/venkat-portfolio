import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ChevronRight, n as Search, r as Github } from "../_libs/lucide-react.mjs";
import { a as DialogTitle, i as DialogPortal, n as DialogContent, o as DialogTrigger, r as DialogOverlay, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bpw_Lqkx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Public handles only. Leave a field empty to hide that link. */
var socials = {
	github: "https://github.com/venkatpachala",
	x: "https://x.com/Venkatpachalaa",
	linkedin: "",
	email: ""
};
function contactLinks() {
	const links = [{
		label: "X",
		href: socials.x
	}, {
		label: "GitHub",
		href: socials.github
	}];
	if (socials.linkedin) links.push({
		label: "LinkedIn",
		href: socials.linkedin
	});
	if (socials.email) links.push({
		label: "Email",
		href: `mailto:${socials.email}`
	});
	return links;
}
function Footer() {
	const links = contactLinks();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "scroll-mt-24 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line px-5 py-8 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl leading-none text-faint",
					"aria-hidden": "true",
					children: "“"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-lg leading-relaxed text-fg",
					children: "Building reliable systems around unreliable models."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted",
					children: "I'm interested in AI engineering, agent infrastructure, LLM systems and ambitious open-source work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-x-5",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "inline-flex min-h-11 items-center text-sm text-fg underline decoration-line underline-offset-4 hover:decoration-primary",
						...link.href.startsWith("mailto:") ? {} : {
							target: "_blank",
							rel: "noreferrer"
						},
						children: link.label
					}) }, link.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-col gap-1 text-sm text-faint sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Venkat · AI Engineer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Let's build something useful." })]
		})]
	});
}
function format(date, timeZone) {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
		timeZone
	}).format(date);
}
function Clocks() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(/* @__PURE__ */ new Date());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-right font-mono text-xs tracking-wide text-fg/90",
		"aria-live": "off",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-faint",
			children: "YOUR "
		}), now ? format(now) : "—"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-faint",
				children: "MY "
			}), now ? format(now, "Asia/Kolkata") : "—"]
		})]
	});
}
var profile = {
	name: "Venkat",
	handle: "@venkatpachala",
	mark: "venkat.",
	role: "AI Engineer · AI Backend · Agent Systems",
	summary: "I build agentic AI systems, retrieval infrastructure, evaluation harnesses and production LLM backends.",
	status: "Currently exploring self-corrective & self-evolving agents"
};
var research = {
	label: "Current research",
	status: "Exploring",
	title: "Self-Corrective & Self-Evolving Agents",
	description: "Exploring agent systems that can inspect their own trajectories, identify failures, improve strategies and adapt their execution harnesses through evaluation-driven feedback loops.",
	directions: [
		"Self-Correction",
		"Agent Evaluation",
		"Harness Optimization",
		"Long-Term Memory / Learning"
	],
	loop: [
		"Execute",
		"Observe",
		"Evaluate",
		"Correct",
		"Improve"
	],
	notesLabel: "Research notes",
	notesHint: "Coming soon"
};
function Pipeline({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-wrap items-center gap-1.5",
		children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs text-fg",
				children: step
			}), index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "size-3.5 text-faint",
				"aria-hidden": "true"
			}) : null]
		}, step))
	});
}
function TechList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-wrap gap-1.5",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "rounded-full border border-line bg-bg/40 px-3 py-1 text-sm text-fg",
			children: item
		}, item))
	});
}
function Research() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: "research",
		className: "scroll-mt-24 mt-4 rounded-2xl border border-line bg-surface/80 px-4 py-4 sm:px-5",
		"aria-labelledby": "research-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-faint uppercase",
					children: research.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 text-xs text-status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "status-dot",
						"aria-hidden": "true"
					}), research.status]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "research-title",
				className: "mt-2 text-lg font-semibold tracking-tight text-fg",
				children: research.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: research.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: research.directions.map((direction) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-line px-3 py-1 text-xs text-fg",
					children: direction
				}, direction))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, { steps: research.loop })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-faint",
				children: [
					research.notesLabel,
					" — ",
					research.notesHint
				]
			})
		]
	});
}
function XIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: "size-4",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
var iconLink = "inline-flex size-11 items-center justify-center rounded-md text-muted hover:text-fg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "scroll-mt-24 pt-8 pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "banner relative h-36 overflow-hidden rounded-2xl border border-line sm:h-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-4 bottom-3 sm:right-5 sm:bottom-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clocks, {})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/profile.jpg",
				alt: "Venkat",
				width: 112,
				height: 112,
				className: "absolute -bottom-10 left-5 size-24 rounded-full border-4 border-bg bg-white object-contain sm:left-6 sm:size-28"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold tracking-tight text-fg",
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base text-muted",
					children: "AI Engineer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "inline-flex min-h-11 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg",
						children: "Let's talk"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: socials.github,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm text-fg hover:border-primary",
						children: "GitHub"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-muted",
					children: profile.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: socials.x,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "X",
						className: iconLink,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: socials.github,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "GitHub",
						className: iconLink,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "size-4",
							"aria-hidden": "true"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Research, {})
			]
		})]
	});
}
var items = [
	{
		href: "#top",
		label: "Home"
	},
	{
		href: "#research",
		label: "Research"
	},
	{
		href: "#stack",
		label: "Tech stack"
	},
	{
		href: "#open-source",
		label: "Open source"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function CommandMenu() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				setOpen((value) => !value);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTrigger, {
			className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm text-muted hover:text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "size-3.5",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Search"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
					className: "rounded-md border border-line px-1.5 py-0.5 font-mono text-xs text-faint",
					children: "⌘K"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-black/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-24 left-1/2 z-50 w-[min(100%-2rem,28rem)] -translate-x-1/2 rounded-2xl border border-line bg-surface p-2 shadow-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "px-3 py-2 text-sm text-muted",
				children: "Jump to"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				onClick: () => setOpen(false),
				className: "flex min-h-11 items-center rounded-xl px-3 text-sm text-fg hover:bg-raised",
				children: item.label
			}) }, item.href)) })]
		})] })]
	});
}
var links = [
	{
		href: "#top",
		label: "Home"
	},
	{
		href: "#research",
		label: "Research"
	},
	{
		href: "#open-source",
		label: "Open Source"
	},
	{
		href: "#projects",
		label: "Projects"
	}
];
function Navbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-line/80 bg-bg/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-4xl items-center gap-4 px-5 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "text-sm font-bold tracking-tight text-fg",
					children: "VP"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Page",
					className: "mx-auto hidden items-center gap-6 md:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "nav-link inline-flex min-h-11 items-center text-sm text-muted hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto md:ml-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandMenu, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Page",
			className: "mx-auto flex max-w-4xl gap-4 overflow-x-auto px-5 pb-2 md:hidden",
			children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				className: "inline-flex min-h-11 shrink-0 items-center text-sm text-muted",
				children: link.label
			}, link.href))
		})]
	});
}
/**
* Add a contribution by appending one object.
* Empty slots are not rendered — the pending line covers work still in progress.
*/
var openSource = [{
	name: "Graphify",
	label: "Open source contribution",
	description: "Graphify builds a local knowledge graph over a repository — tree-sitter structure, not just embeddings — so agents can query code relationships. My current patch stops PHP supertype edges (inherits, implements, mixes_in) from binding to a same-named symbol in another language.",
	focuses: [
		"Code intelligence",
		"Repository graphs",
		"Retrieval",
		"Tree-sitter"
	],
	repositoryUrl: "https://github.com/Graphify-Labs/graphify",
	contributionsUrl: "https://github.com/venkatpachala/graphify/pull/1"
}];
var openSourcePending = "More contributions in progress.";
function SectionHeading({ id, eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-faint",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id,
				className: "text-3xl font-bold tracking-tight text-fg",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
				children: subtitle
			}) : null
		]
	});
}
function OpenSource() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "open-source",
		className: "scroll-mt-24 py-12",
		"aria-labelledby": "oss-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			id: "oss-title",
			eyebrow: "Contributing",
			title: "Open Source",
			subtitle: "Infrastructure behind AI agents and code intelligence."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-10",
			children: [openSource.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-14 shrink-0 items-center justify-center rounded-xl border border-line bg-raised font-mono text-sm text-primary-soft",
						"aria-hidden": "true",
						children: "Gf"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold tracking-tight text-fg",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: item.label
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: item.repositoryUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center text-fg underline decoration-line underline-offset-4 hover:decoration-primary",
									children: "Repository"
								}), item.contributionsUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: item.contributionsUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center text-fg underline decoration-line underline-offset-4 hover:decoration-primary",
									children: "Contributions"
								}) : null]
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: item.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-semibold text-fg",
					children: "Focus"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechList, { items: item.focuses })
				})
			] }, item.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl border border-dashed border-line px-4 py-4 text-sm text-faint",
				children: openSourcePending
			})]
		})]
	});
}
function FeaturedProject({ project }) {
	const github = project.links.find((link) => link.label === "GitHub");
	const extra = project.links.filter((link) => link.label !== "GitHub");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "banner flex h-36 flex-col justify-between rounded-2xl border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-faint",
					children: project.index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, { steps: project.pipeline.slice(0, 4) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold tracking-tight text-fg",
					children: project.name
				}), github ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: github.href,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": `${project.name} on GitHub`,
					className: "inline-flex min-h-11 items-center text-sm text-muted hover:text-fg",
					children: "GitHub"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-faint",
				children: project.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: project.summary
			}),
			project.principle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium text-fg",
				children: project.principle.quote
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold text-fg",
				children: "Technologies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechList, { items: project.tech })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "status-dot",
						"aria-hidden": "true"
					}), project.status]
				}), extra.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link.href,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 items-center text-sm text-fg hover:text-primary-soft",
					children: [link.label, " →"]
				}, link.href))]
			})
		]
	});
}
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-2xl border border-line p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: project.index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-lg font-bold tracking-tight text-fg",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: project.category
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-line px-2 py-1 text-xs text-faint",
					children: project.status
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: project.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, { steps: project.pipeline })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechList, { items: project.tech })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto flex flex-wrap gap-x-4 pt-2",
				children: project.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link.href,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 items-center text-sm text-fg hover:text-primary-soft",
					children: [link.label, " →"]
				}, link.href))
			})
		]
	});
}
var skillGroups = [
	{
		name: "AI / Agent Systems",
		items: [
			"Agentic AI",
			"Multi-Agent Systems",
			"Tool Calling",
			"RAG",
			"Agent Evaluation",
			"LLM Applications",
			"Prompt / Context Engineering"
		]
	},
	{
		name: "Retrieval & Knowledge",
		items: [
			"Qdrant",
			"Neo4j",
			"BM25",
			"Hybrid Search",
			"RRF",
			"Reranking",
			"Vector Search",
			"Knowledge Graphs"
		]
	},
	{
		name: "Backend",
		items: [
			"Python",
			"FastAPI",
			"REST APIs",
			"Pydantic",
			"AsyncIO",
			"PostgreSQL",
			"Docker"
		]
	},
	{
		name: "LLM / ML Infrastructure",
		items: [
			"Ollama",
			"Hugging Face",
			"Local LLMs",
			"Embeddings",
			"Cross Encoders",
			"Model Evaluation"
		]
	},
	{
		name: "Observability / Production",
		items: [
			"LangSmith",
			"Langfuse",
			"Prometheus",
			"Grafana",
			"Evaluation Pipelines"
		]
	}
];
var stackMarks = [
	{
		label: "Python",
		mark: "Py"
	},
	{
		label: "FastAPI",
		mark: "API"
	},
	{
		label: "LangGraph",
		mark: "LG"
	},
	{
		label: "Ollama",
		mark: "Ol"
	},
	{
		label: "RAG",
		mark: "RAG"
	},
	{
		label: "Qdrant",
		mark: "Qd"
	},
	{
		label: "Neo4j",
		mark: "N4"
	},
	{
		label: "Graphify",
		mark: "Gf"
	},
	{
		label: "Docker",
		mark: "Dk"
	},
	{
		label: "Pydantic",
		mark: "Pd"
	},
	{
		label: "Grafana",
		mark: "Gr"
	},
	{
		label: "LangSmith",
		mark: "LS"
	}
];
var interests = [
	"Agent Harnesses",
	"Code Intelligence",
	"Self-Evolving Agents",
	"Retrieval Systems",
	"AI Evaluation",
	"Local-First AI"
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "stack",
		className: "scroll-mt-24 py-12",
		"aria-labelledby": "stack-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-faint uppercase",
				children: "Tech stack"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-2",
				children: stackMarks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					title: item.label,
					className: "flex size-14 items-center justify-center rounded-2xl border border-dashed border-line font-mono text-xs text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: item.mark
					})]
				}) }, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					id: "stack-title",
					title: "Engineering Stack",
					subtitle: "Grouped by the job, not by logo."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-5",
				children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-fg",
					children: group.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-line px-3 py-1 text-sm text-muted",
						children: item
					}, item))
				})] }, group.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-faint",
				children: "Interested in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-wrap gap-1.5",
				children: interests.map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full bg-raised px-3 py-1 text-xs text-fg",
					children: interest
				}, interest))
			})
		]
	});
}
var projects = [
	{
		slug: "codeturtle",
		index: "01",
		name: "CodeTurtle",
		repo: "venkatpachala/CodeTurtle",
		featured: true,
		category: "Agentic code review / developer infrastructure",
		status: "Active",
		summary: "A local-first CLI that reviews a GitHub pull request against repository context. The default runtime is a bounded, LangGraph-free pipeline: rules and a proof gate wrap a small agent, and policy — not the model — makes the review decision.",
		pipeline: [
			"PR",
			"Change units",
			"Graphify",
			"Agent",
			"Proof",
			"Policy",
			"Decision"
		],
		principle: {
			quote: "LLMs reason. Policy decides.",
			detail: "The model produces evidence and findings. decide() maps coverage, tests, and verification into MERGE, COMMENT, or REQUEST_CHANGES."
		},
		points: [
			"Hunks are reviewed as impl + test bundles, not as an isolated diff",
			"Optional Graphify graph supplies repository context to the agent and the verify loop",
			"A proof gate drops findings that are not fully supported",
			"Deterministic rules run before any model call; agent steps are capped"
		],
		tech: [
			"Python",
			"CLI",
			"Ollama",
			"Graphify",
			"Evaluation"
		],
		moreTech: [
			"Local LLMs",
			"Diff index",
			"Proof gate"
		],
		links: [{
			label: "GitHub",
			href: "https://github.com/venkatpachala/CodeTurtle"
		}, {
			label: "Architecture",
			href: "https://github.com/venkatpachala/CodeTurtle/blob/main/docs/CURRENT_ARCHITECTURE.md"
		}]
	},
	{
		slug: "d2c-support",
		index: "02",
		name: "D2C AI Customer Support",
		repo: "venkatpachala/AI-Customer-Support-",
		featured: true,
		category: "Multi-agent support backend",
		status: "Built",
		summary: "A multi-agent backend for D2C support workflows — returns, refunds, cancellations, and policy questions. Retrieval, tool calls, verification, guardrails, and human escalation are separate steps.",
		pipeline: [
			"User",
			"Guardrails",
			"Supervisor",
			"Planner",
			"Tools / RAG",
			"Verifier",
			"HITL",
			"Response"
		],
		principle: {
			quote: "Agents can reason — but sensitive actions remain controlled.",
			detail: "Shopify and Stripe calls retry and time out. A verifier and human escalation sit in front of high-risk actions. An output guard blocks unsupported claims."
		},
		points: [
			"Supervisor routes intent and risk; the planner emits a structured plan",
			"Policy questions can answer from Pinecone RAG before tools run",
			"Shopify and Stripe executions retry, time out, and can run in parallel",
			"LangSmith traces the run; Prometheus and Grafana expose the metrics"
		],
		tech: [
			"Python",
			"FastAPI",
			"LangGraph",
			"RAG",
			"Shopify",
			"Stripe"
		],
		moreTech: [
			"Pinecone",
			"LangSmith",
			"Prometheus",
			"Grafana",
			"Ollama",
			"Guardrails"
		],
		links: [{
			label: "GitHub",
			href: "https://github.com/venkatpachala/AI-Customer-Support-"
		}]
	},
	{
		slug: "harnesslab",
		index: "03",
		name: "HarnessLab",
		repo: "venkatpachala/HarnessLab",
		featured: false,
		category: "Agent harness / evaluation",
		status: "Experiment",
		summary: "A lab for measuring execution harnesses rather than swapping models. The model, tasks, world, and budget stay locked. Only the harness changes. Scores come from the resulting world state, not from an LLM judge.",
		pipeline: [
			"Task",
			"Harness",
			"Tools",
			"Oracle",
			"Compare"
		],
		points: [
			"Direct, planner, and recovery loops on the same task set",
			"Tool faults are injected; recovery is a retry budget",
			"Runs are logged and scored by deterministic state oracles"
		],
		tech: [
			"Python",
			"Agent traces",
			"Evaluation",
			"Fault injection",
			"Harness design"
		],
		links: [{
			label: "GitHub",
			href: "https://github.com/venkatpachala/HarnessLab"
		}, {
			label: "Notes",
			href: "https://github.com/venkatpachala/HarnessLab/blob/main/RESEARCH_NOTE.md"
		}]
	},
	{
		slug: "opensearch",
		index: "04",
		name: "OpenSearch",
		repo: "venkatpachala/OpenSearch",
		featured: false,
		category: "Self-correcting experiments",
		status: "Research",
		summary: "This repository is ResearchRepro: a goal-driven agent for multi-step experiments. After every tool call it checks execution, validity, and progress against a frozen goal contract, then recovers inside a bounded budget.",
		pipeline: [
			"Goal",
			"Plan",
			"Tool",
			"Evaluate",
			"Recover"
		],
		principle: {
			quote: "The evaluator declares success. The planner does not.",
			detail: "GoalContract stays immutable for the run, so a high score that breaks a constraint is not a win. Typed tools reject bad arguments before they execute."
		},
		points: [
			"Working memory keeps experiments, failures, and recovery records",
			"One recovery strategy per failure type, inside a budget",
			"Local Ollama planner; real training runs, not showcase stubs"
		],
		tech: [
			"Python",
			"Ollama",
			"Pydantic",
			"Evaluation",
			"Recovery"
		],
		links: [{
			label: "GitHub",
			href: "https://github.com/venkatpachala/OpenSearch"
		}, {
			label: "Architecture",
			href: "https://github.com/venkatpachala/OpenSearch/blob/main/docs/ARCHITECTURE.md"
		}]
	}
];
function Home() {
	const featured = projects.filter((project) => project.featured);
	const rest = projects.filter((project) => !project.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#content",
			className: "skip-link",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "content",
			className: "mx-auto w-full max-w-4xl px-5 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenSource, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "projects",
					className: "scroll-mt-24 py-12",
					"aria-labelledby": "work-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							id: "work-title",
							eyebrow: "Featured",
							title: "Projects",
							subtitle: "AI systems I've designed, built and evaluated."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-10 md:grid-cols-2",
							children: featured.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProject, { project }, project.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2",
							children: rest.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.slug))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	] });
}
//#endregion
export { Home as component };
