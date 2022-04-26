--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

-- Started on 2022-04-01 04:03:27 +06

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE internbee_db;
--
-- TOC entry 3753 (class 1262 OID 18187)
-- Name: internbee_db; Type: DATABASE; Schema: -; Owner: internbee
--

CREATE DATABASE internbee_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE internbee_db OWNER TO internbee;

connect internbee_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 18279)
-- Name: auth_group; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO internbee;

--
-- TOC entry 215 (class 1259 OID 18278)
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO internbee;

--
-- TOC entry 3754 (class 0 OID 0)
-- Dependencies: 215
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- TOC entry 218 (class 1259 OID 18288)
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO internbee;

--
-- TOC entry 217 (class 1259 OID 18287)
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO internbee;

--
-- TOC entry 3755 (class 0 OID 0)
-- Dependencies: 217
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- TOC entry 214 (class 1259 OID 18272)
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO internbee;

--
-- TOC entry 213 (class 1259 OID 18271)
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO internbee;

--
-- TOC entry 3756 (class 0 OID 0)
-- Dependencies: 213
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- TOC entry 233 (class 1259 OID 18443)
-- Name: authtoken_token; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.authtoken_token OWNER TO internbee;

--
-- TOC entry 226 (class 1259 OID 18346)
-- Name: base_company; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.base_company (
    user_id bigint NOT NULL,
    cid integer NOT NULL,
    company_name character varying(200),
    description character varying(200),
    "cityName" character varying(200),
    address character varying(200)
);


ALTER TABLE public.base_company OWNER TO internbee;

--
-- TOC entry 225 (class 1259 OID 18345)
-- Name: base_company_cid_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.base_company_cid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.base_company_cid_seq OWNER TO internbee;

--
-- TOC entry 3757 (class 0 OID 0)
-- Dependencies: 225
-- Name: base_company_cid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.base_company_cid_seq OWNED BY public.base_company.cid;


--
-- TOC entry 230 (class 1259 OID 18368)
-- Name: base_internship; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.base_internship (
    company_id integer,
    name character varying(200),
    description character varying(200),
    requirements character varying(200),
    duration character varying(200),
    skills character varying(200),
    responsibilities character varying(200),
    salary numeric(7,2),
    _id integer NOT NULL
);


ALTER TABLE public.base_internship OWNER TO internbee;

--
-- TOC entry 229 (class 1259 OID 18367)
-- Name: base_internship__id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.base_internship__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.base_internship__id_seq OWNER TO internbee;

--
-- TOC entry 3758 (class 0 OID 0)
-- Dependencies: 229
-- Name: base_internship__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.base_internship__id_seq OWNED BY public.base_internship._id;


--
-- TOC entry 228 (class 1259 OID 18357)
-- Name: base_student; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.base_student (
    user_id bigint NOT NULL,
    sid integer NOT NULL,
    "firstName" character varying(200),
    "lastName" character varying(200),
    "universityName" character varying(100),
    major character varying(100),
    gender character varying(200),
    "cGpa" numeric(3,2)
);


ALTER TABLE public.base_student OWNER TO internbee;

--
-- TOC entry 227 (class 1259 OID 18356)
-- Name: base_student_sid_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.base_student_sid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.base_student_sid_seq OWNER TO internbee;

--
-- TOC entry 3759 (class 0 OID 0)
-- Dependencies: 227
-- Name: base_student_sid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.base_student_sid_seq OWNED BY public.base_student.sid;


--
-- TOC entry 220 (class 1259 OID 18321)
-- Name: base_user; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.base_user (
    id bigint NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    email character varying(255) NOT NULL,
    is_student boolean NOT NULL,
    is_company boolean NOT NULL
);


ALTER TABLE public.base_user OWNER TO internbee;

--
-- TOC entry 222 (class 1259 OID 18332)
-- Name: base_user_groups; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.base_user_groups (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.base_user_groups OWNER TO internbee;

--
-- TOC entry 221 (class 1259 OID 18331)
-- Name: base_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.base_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.base_user_groups_id_seq OWNER TO internbee;

--
-- TOC entry 3760 (class 0 OID 0)
-- Dependencies: 221
-- Name: base_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.base_user_groups_id_seq OWNED BY public.base_user_groups.id;


--
-- TOC entry 219 (class 1259 OID 18320)
-- Name: base_user_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.base_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.base_user_id_seq OWNER TO internbee;

--
-- TOC entry 3761 (class 0 OID 0)
-- Dependencies: 219
-- Name: base_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.base_user_id_seq OWNED BY public.base_user.id;


--
-- TOC entry 224 (class 1259 OID 18339)
-- Name: base_user_user_permissions; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.base_user_user_permissions (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.base_user_user_permissions OWNER TO internbee;

--
-- TOC entry 223 (class 1259 OID 18338)
-- Name: base_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.base_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.base_user_user_permissions_id_seq OWNER TO internbee;

--
-- TOC entry 3762 (class 0 OID 0)
-- Dependencies: 223
-- Name: base_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.base_user_user_permissions_id_seq OWNED BY public.base_user_user_permissions.id;


--
-- TOC entry 232 (class 1259 OID 18422)
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id bigint NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO internbee;

--
-- TOC entry 231 (class 1259 OID 18421)
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO internbee;

--
-- TOC entry 3763 (class 0 OID 0)
-- Dependencies: 231
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- TOC entry 212 (class 1259 OID 18263)
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO internbee;

--
-- TOC entry 211 (class 1259 OID 18262)
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO internbee;

--
-- TOC entry 3764 (class 0 OID 0)
-- Dependencies: 211
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- TOC entry 210 (class 1259 OID 18254)
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO internbee;

--
-- TOC entry 209 (class 1259 OID 18253)
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: internbee
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO internbee;

--
-- TOC entry 3765 (class 0 OID 0)
-- Dependencies: 209
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: internbee
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- TOC entry 234 (class 1259 OID 18456)
-- Name: django_session; Type: TABLE; Schema: public; Owner: internbee
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO internbee;

--
-- TOC entry 3497 (class 2604 OID 18282)
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- TOC entry 3498 (class 2604 OID 18291)
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- TOC entry 3496 (class 2604 OID 18275)
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- TOC entry 3502 (class 2604 OID 18349)
-- Name: base_company cid; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_company ALTER COLUMN cid SET DEFAULT nextval('public.base_company_cid_seq'::regclass);


--
-- TOC entry 3504 (class 2604 OID 18371)
-- Name: base_internship _id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_internship ALTER COLUMN _id SET DEFAULT nextval('public.base_internship__id_seq'::regclass);


--
-- TOC entry 3503 (class 2604 OID 18360)
-- Name: base_student sid; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_student ALTER COLUMN sid SET DEFAULT nextval('public.base_student_sid_seq'::regclass);


--
-- TOC entry 3499 (class 2604 OID 18324)
-- Name: base_user id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user ALTER COLUMN id SET DEFAULT nextval('public.base_user_id_seq'::regclass);


--
-- TOC entry 3500 (class 2604 OID 18335)
-- Name: base_user_groups id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_groups ALTER COLUMN id SET DEFAULT nextval('public.base_user_groups_id_seq'::regclass);


--
-- TOC entry 3501 (class 2604 OID 18342)
-- Name: base_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.base_user_user_permissions_id_seq'::regclass);


--
-- TOC entry 3505 (class 2604 OID 18425)
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- TOC entry 3495 (class 2604 OID 18266)
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- TOC entry 3494 (class 2604 OID 18257)
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- TOC entry 3729 (class 0 OID 18279)
-- Dependencies: 216
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3731 (class 0 OID 18288)
-- Dependencies: 218
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3727 (class 0 OID 18272)
-- Dependencies: 214
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3746 (class 0 OID 18443)
-- Dependencies: 233
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3739 (class 0 OID 18346)
-- Dependencies: 226
-- Data for Name: base_company; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3743 (class 0 OID 18368)
-- Dependencies: 230
-- Data for Name: base_internship; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3741 (class 0 OID 18357)
-- Dependencies: 228
-- Data for Name: base_student; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3733 (class 0 OID 18321)
-- Dependencies: 220
-- Data for Name: base_user; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3735 (class 0 OID 18332)
-- Dependencies: 222
-- Data for Name: base_user_groups; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3737 (class 0 OID 18339)
-- Dependencies: 224
-- Data for Name: base_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3745 (class 0 OID 18422)
-- Dependencies: 232
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3725 (class 0 OID 18263)
-- Dependencies: 212
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3723 (class 0 OID 18254)
-- Dependencies: 210
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: internbee
--

INSERT INTO public.django_migrations (id, app, name, applied) VALUES (1, 'contenttypes', '0001_initial', '2022-04-01 03:42:13.805917+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (2, 'contenttypes', '0002_remove_content_type_name', '2022-04-01 03:42:13.836219+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (3, 'auth', '0001_initial', '2022-04-01 03:42:13.88674+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (4, 'auth', '0002_alter_permission_name_max_length', '2022-04-01 03:42:13.89328+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (5, 'auth', '0003_alter_user_email_max_length', '2022-04-01 03:42:13.899541+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (6, 'auth', '0004_alter_user_username_opts', '2022-04-01 03:42:13.907469+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (7, 'auth', '0005_alter_user_last_login_null', '2022-04-01 03:42:13.914892+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (8, 'auth', '0006_require_contenttypes_0002', '2022-04-01 03:42:13.91698+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (9, 'auth', '0007_alter_validators_add_error_messages', '2022-04-01 03:42:13.925661+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (10, 'auth', '0008_alter_user_username_max_length', '2022-04-01 03:42:13.933489+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (11, 'auth', '0009_alter_user_last_name_max_length', '2022-04-01 03:42:13.942119+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (12, 'auth', '0010_alter_group_name_max_length', '2022-04-01 03:42:13.952684+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (13, 'auth', '0011_update_proxy_permissions', '2022-04-01 03:42:13.965622+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (14, 'auth', '0012_alter_user_first_name_max_length', '2022-04-01 03:42:13.972907+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (15, 'admin', '0001_initial', '2022-04-01 03:42:37.528664+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (16, 'admin', '0002_logentry_remove_auto_add', '2022-04-01 03:42:37.535512+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (17, 'admin', '0003_logentry_add_action_flag_choices', '2022-04-01 03:42:37.54202+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (18, 'authtoken', '0001_initial', '2022-04-01 03:42:37.562803+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (19, 'authtoken', '0002_auto_20160226_1747', '2022-04-01 03:42:37.591415+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (20, 'authtoken', '0003_tokenproxy', '2022-04-01 03:42:37.596164+06');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (21, 'sessions', '0001_initial', '2022-04-01 03:42:37.606903+06');


--
-- TOC entry 3747 (class 0 OID 18456)
-- Dependencies: 234
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: internbee
--



--
-- TOC entry 3766 (class 0 OID 0)
-- Dependencies: 215
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- TOC entry 3767 (class 0 OID 0)
-- Dependencies: 217
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- TOC entry 3768 (class 0 OID 0)
-- Dependencies: 213
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 44, true);


--
-- TOC entry 3769 (class 0 OID 0)
-- Dependencies: 225
-- Name: base_company_cid_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.base_company_cid_seq', 1, false);


--
-- TOC entry 3770 (class 0 OID 0)
-- Dependencies: 229
-- Name: base_internship__id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.base_internship__id_seq', 1, false);


--
-- TOC entry 3771 (class 0 OID 0)
-- Dependencies: 227
-- Name: base_student_sid_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.base_student_sid_seq', 1, false);


--
-- TOC entry 3772 (class 0 OID 0)
-- Dependencies: 221
-- Name: base_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.base_user_groups_id_seq', 1, false);


--
-- TOC entry 3773 (class 0 OID 0)
-- Dependencies: 219
-- Name: base_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.base_user_id_seq', 1, false);


--
-- TOC entry 3774 (class 0 OID 0)
-- Dependencies: 223
-- Name: base_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.base_user_user_permissions_id_seq', 1, false);


--
-- TOC entry 3775 (class 0 OID 0)
-- Dependencies: 231
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- TOC entry 3776 (class 0 OID 0)
-- Dependencies: 211
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 11, true);


--
-- TOC entry 3777 (class 0 OID 0)
-- Dependencies: 209
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: internbee
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 21, true);


--
-- TOC entry 3520 (class 2606 OID 18318)
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- TOC entry 3525 (class 2606 OID 18304)
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- TOC entry 3528 (class 2606 OID 18293)
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3522 (class 2606 OID 18284)
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- TOC entry 3515 (class 2606 OID 18295)
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- TOC entry 3517 (class 2606 OID 18277)
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 3563 (class 2606 OID 18447)
-- Name: authtoken_token authtoken_token_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- TOC entry 3565 (class 2606 OID 18449)
-- Name: authtoken_token authtoken_token_user_id_key; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);


--
-- TOC entry 3547 (class 2606 OID 18353)
-- Name: base_company base_company_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_company
    ADD CONSTRAINT base_company_pkey PRIMARY KEY (cid);


--
-- TOC entry 3549 (class 2606 OID 18355)
-- Name: base_company base_company_user_id_key; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_company
    ADD CONSTRAINT base_company_user_id_key UNIQUE (user_id);


--
-- TOC entry 3556 (class 2606 OID 18375)
-- Name: base_internship base_internship_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_internship
    ADD CONSTRAINT base_internship_pkey PRIMARY KEY (_id);


--
-- TOC entry 3551 (class 2606 OID 18364)
-- Name: base_student base_student_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_student
    ADD CONSTRAINT base_student_pkey PRIMARY KEY (sid);


--
-- TOC entry 3553 (class 2606 OID 18366)
-- Name: base_student base_student_user_id_key; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_student
    ADD CONSTRAINT base_student_user_id_key UNIQUE (user_id);


--
-- TOC entry 3531 (class 2606 OID 18330)
-- Name: base_user base_user_email_key; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user
    ADD CONSTRAINT base_user_email_key UNIQUE (email);


--
-- TOC entry 3536 (class 2606 OID 18337)
-- Name: base_user_groups base_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_groups
    ADD CONSTRAINT base_user_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 3539 (class 2606 OID 18378)
-- Name: base_user_groups base_user_groups_user_id_group_id_774631b7_uniq; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_groups
    ADD CONSTRAINT base_user_groups_user_id_group_id_774631b7_uniq UNIQUE (user_id, group_id);


--
-- TOC entry 3533 (class 2606 OID 18328)
-- Name: base_user base_user_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user
    ADD CONSTRAINT base_user_pkey PRIMARY KEY (id);


--
-- TOC entry 3542 (class 2606 OID 18344)
-- Name: base_user_user_permissions base_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_user_permissions
    ADD CONSTRAINT base_user_user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3545 (class 2606 OID 18392)
-- Name: base_user_user_permissions base_user_user_permissions_user_id_permission_id_e9093277_uniq; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_user_permissions
    ADD CONSTRAINT base_user_user_permissions_user_id_permission_id_e9093277_uniq UNIQUE (user_id, permission_id);


--
-- TOC entry 3559 (class 2606 OID 18430)
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3510 (class 2606 OID 18270)
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- TOC entry 3512 (class 2606 OID 18268)
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3508 (class 2606 OID 18261)
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3568 (class 2606 OID 18462)
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- TOC entry 3518 (class 1259 OID 18319)
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- TOC entry 3523 (class 1259 OID 18315)
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- TOC entry 3526 (class 1259 OID 18316)
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- TOC entry 3513 (class 1259 OID 18301)
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- TOC entry 3561 (class 1259 OID 18455)
-- Name: authtoken_token_key_10f0b77e_like; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX authtoken_token_key_10f0b77e_like ON public.authtoken_token USING btree (key varchar_pattern_ops);


--
-- TOC entry 3554 (class 1259 OID 18420)
-- Name: base_internship_company_id_9c454314; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX base_internship_company_id_9c454314 ON public.base_internship USING btree (company_id);


--
-- TOC entry 3529 (class 1259 OID 18376)
-- Name: base_user_email_fbc4c0ff_like; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX base_user_email_fbc4c0ff_like ON public.base_user USING btree (email varchar_pattern_ops);


--
-- TOC entry 3534 (class 1259 OID 18390)
-- Name: base_user_groups_group_id_c0eca7d6; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX base_user_groups_group_id_c0eca7d6 ON public.base_user_groups USING btree (group_id);


--
-- TOC entry 3537 (class 1259 OID 18389)
-- Name: base_user_groups_user_id_29a796b6; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX base_user_groups_user_id_29a796b6 ON public.base_user_groups USING btree (user_id);


--
-- TOC entry 3540 (class 1259 OID 18404)
-- Name: base_user_user_permissions_permission_id_0418bc02; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX base_user_user_permissions_permission_id_0418bc02 ON public.base_user_user_permissions USING btree (permission_id);


--
-- TOC entry 3543 (class 1259 OID 18403)
-- Name: base_user_user_permissions_user_id_2eec4d63; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX base_user_user_permissions_user_id_2eec4d63 ON public.base_user_user_permissions USING btree (user_id);


--
-- TOC entry 3557 (class 1259 OID 18441)
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- TOC entry 3560 (class 1259 OID 18442)
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- TOC entry 3566 (class 1259 OID 18464)
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- TOC entry 3569 (class 1259 OID 18463)
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: internbee
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- TOC entry 3572 (class 2606 OID 18310)
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3571 (class 2606 OID 18305)
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3570 (class 2606 OID 18296)
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3582 (class 2606 OID 18450)
-- Name: authtoken_token authtoken_token_user_id_35299eff_fk_base_user_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_base_user_id FOREIGN KEY (user_id) REFERENCES public.base_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3577 (class 2606 OID 18405)
-- Name: base_company base_company_user_id_0146f508_fk_base_user_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_company
    ADD CONSTRAINT base_company_user_id_0146f508_fk_base_user_id FOREIGN KEY (user_id) REFERENCES public.base_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3579 (class 2606 OID 18415)
-- Name: base_internship base_internship_company_id_9c454314_fk_base_company_cid; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_internship
    ADD CONSTRAINT base_internship_company_id_9c454314_fk_base_company_cid FOREIGN KEY (company_id) REFERENCES public.base_company(cid) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3578 (class 2606 OID 18410)
-- Name: base_student base_student_user_id_61cc1859_fk_base_user_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_student
    ADD CONSTRAINT base_student_user_id_61cc1859_fk_base_user_id FOREIGN KEY (user_id) REFERENCES public.base_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3574 (class 2606 OID 18384)
-- Name: base_user_groups base_user_groups_group_id_c0eca7d6_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_groups
    ADD CONSTRAINT base_user_groups_group_id_c0eca7d6_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3573 (class 2606 OID 18379)
-- Name: base_user_groups base_user_groups_user_id_29a796b6_fk_base_user_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_groups
    ADD CONSTRAINT base_user_groups_user_id_29a796b6_fk_base_user_id FOREIGN KEY (user_id) REFERENCES public.base_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3576 (class 2606 OID 18398)
-- Name: base_user_user_permissions base_user_user_permi_permission_id_0418bc02_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_user_permissions
    ADD CONSTRAINT base_user_user_permi_permission_id_0418bc02_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3575 (class 2606 OID 18393)
-- Name: base_user_user_permissions base_user_user_permissions_user_id_2eec4d63_fk_base_user_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.base_user_user_permissions
    ADD CONSTRAINT base_user_user_permissions_user_id_2eec4d63_fk_base_user_id FOREIGN KEY (user_id) REFERENCES public.base_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3580 (class 2606 OID 18431)
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3581 (class 2606 OID 18436)
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_base_user_id; Type: FK CONSTRAINT; Schema: public; Owner: internbee
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_base_user_id FOREIGN KEY (user_id) REFERENCES public.base_user(id) DEFERRABLE INITIALLY DEFERRED;


-- Completed on 2022-04-01 04:03:28 +06

--
-- PostgreSQL database dump complete
--

